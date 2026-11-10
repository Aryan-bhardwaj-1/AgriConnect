from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
import os

# =========================================================
# APP CONFIGURATION
# =========================================================

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

app.config["SQLALCHEMY_DATABASE_URI"] = (
    "sqlite:///" + os.path.join(BASE_DIR, "agriculture_marketplace.db")
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


# =========================================================
# DATABASE MODELS
# =========================================================

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    password = db.Column(db.String(255), nullable=False)

    role = db.Column(db.String(20), nullable=False)
    # farmer / buyer

    location = db.Column(db.String(150))

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    farmer_id = db.Column(
        db.Integer,
        db.ForeignKey("user.id"),
        nullable=False
    )

    name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(100))

    quantity = db.Column(db.Float, nullable=False)
    unit = db.Column(db.String(20), default="kg")

    price = db.Column(db.Float, nullable=False)

    location = db.Column(db.String(150))

    description = db.Column(db.Text)

    image = db.Column(db.String(500))

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )


class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    buyer_id = db.Column(
        db.Integer,
        db.ForeignKey("user.id"),
        nullable=False
    )

    farmer_id = db.Column(
        db.Integer,
        db.ForeignKey("user.id"),
        nullable=False
    )

    product_id = db.Column(
        db.Integer,
        db.ForeignKey("product.id"),
        nullable=False
    )

    quantity = db.Column(db.Float, nullable=False)

    total_price = db.Column(db.Float, nullable=False)

    status = db.Column(
        db.String(50),
        default="Pending"
    )

    delivery_address = db.Column(db.String(300))

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )


class Requirement(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    buyer_id = db.Column(
        db.Integer,
        db.ForeignKey("user.id"),
        nullable=False
    )

    product_name = db.Column(
        db.String(100),
        nullable=False
    )

    quantity = db.Column(
        db.Float,
        nullable=False
    )

    unit = db.Column(
        db.String(20),
        default="kg"
    )

    max_price = db.Column(
        db.Float
    )

    location = db.Column(
        db.String(150)
    )

    status = db.Column(
        db.String(30),
        default="Active"
    )

    created_at = db.Column(
        db.DateTime,
        default=datetime.utcnow
    )


# =========================================================
# HOME / HEALTH CHECK
# =========================================================

@app.route("/")
def home():

    return jsonify({
        "message": "Agriculture Marketplace API is running",
        "status": "success"
    })


# =========================================================
# CREATE DATABASE
# =========================================================

@app.route("/create-db")
def create_database():

    db.create_all()

    return jsonify({
        "message": "Database created successfully"
    })


# =========================================================
# FARMER SIGNUP
# =========================================================

@app.route("/api/farmer/signup", methods=["POST"])
def farmer_signup():

    data = request.get_json()

    name = data.get("name")
    phone = data.get("phone")
    email = data.get("email")
    password = data.get("password")
    location = data.get("location")

    if not name or not phone or not email or not password:

        return jsonify({
            "message": "All required fields are necessary"
        }), 400

    existing_user = User.query.filter(
        (User.email == email) |
        (User.phone == phone)
    ).first()

    if existing_user:

        return jsonify({
            "message": "Email or phone already registered"
        }), 409

    farmer = User(
        name=name,
        phone=phone,
        email=email,
        password=generate_password_hash(password),
        role="farmer",
        location=location
    )

    db.session.add(farmer)
    db.session.commit()

    return jsonify({
        "message": "Farmer registered successfully",
        "farmer": {
            "id": farmer.id,
            "name": farmer.name,
            "email": farmer.email,
            "role": farmer.role
        }
    }), 201


# =========================================================
# FARMER LOGIN
# =========================================================

@app.route("/api/farmer/login", methods=["POST"])
def farmer_login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    farmer = User.query.filter_by(
        email=email,
        role="farmer"
    ).first()

    if not farmer:

        return jsonify({
            "message": "Farmer not found"
        }), 404

    if not check_password_hash(
        farmer.password,
        password
    ):

        return jsonify({
            "message": "Invalid password"
        }), 401

    return jsonify({
        "message": "Farmer login successful",

        "user": {
            "id": farmer.id,
            "name": farmer.name,
            "email": farmer.email,
            "phone": farmer.phone,
            "location": farmer.location,
            "role": farmer.role
        }
    })


# =========================================================
# BUYER SIGNUP
# =========================================================

@app.route("/api/buyer/signup", methods=["POST"])
def buyer_signup():

    data = request.get_json()

    name = data.get("name")
    phone = data.get("phone")
    email = data.get("email")
    password = data.get("password")
    location = data.get("location")

    if not name or not phone or not email or not password:

        return jsonify({
            "message": "All required fields are necessary"
        }), 400

    existing_user = User.query.filter(
        (User.email == email) |
        (User.phone == phone)
    ).first()

    if existing_user:

        return jsonify({
            "message": "Email or phone already registered"
        }), 409

    buyer = User(
        name=name,
        phone=phone,
        email=email,
        password=generate_password_hash(password),
        role="buyer",
        location=location
    )

    db.session.add(buyer)
    db.session.commit()

    return jsonify({
        "message": "Buyer registered successfully",
        "buyer": {
            "id": buyer.id,
            "name": buyer.name,
            "email": buyer.email,
            "role": buyer.role
        }
    }), 201


# =========================================================
# BUYER LOGIN
# =========================================================

@app.route("/api/buyer/login", methods=["POST"])
def buyer_login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    buyer = User.query.filter_by(
        email=email,
        role="buyer"
    ).first()

    if not buyer:

        return jsonify({
            "message": "Buyer not found"
        }), 404

    if not check_password_hash(
        buyer.password,
        password
    ):

        return jsonify({
            "message": "Invalid password"
        }), 401

    return jsonify({
        "message": "Buyer login successful",

        "user": {
            "id": buyer.id,
            "name": buyer.name,
            "email": buyer.email,
            "phone": buyer.phone,
            "location": buyer.location,
            "role": buyer.role
        }
    })


# =========================================================
# ADD PRODUCT
# =========================================================

@app.route("/api/products", methods=["POST"])
def add_product():

    data = request.get_json()

    farmer_id = data.get("farmer_id")
    name = data.get("name")
    category = data.get("category")
    quantity = data.get("quantity")
    unit = data.get("unit", "kg")
    price = data.get("price")
    location = data.get("location")
    description = data.get("description")
    image = data.get("image")

    if not farmer_id or not name or quantity is None or price is None:

        return jsonify({
            "message": "Required product information missing"
        }), 400

    farmer = User.query.filter_by(
        id=farmer_id,
        role="farmer"
    ).first()

    if not farmer:

        return jsonify({
            "message": "Farmer not found"
        }), 404

    product = Product(
        farmer_id=farmer_id,
        name=name,
        category=category,
        quantity=float(quantity),
        unit=unit,
        price=float(price),
        location=location,
        description=description,
        image=image
    )

    db.session.add(product)
    db.session.commit()

    return jsonify({
        "message": "Product added successfully",
        "product_id": product.id
    }), 201


# =========================================================
# GET ALL PRODUCTS
# =========================================================

@app.route("/api/products", methods=["GET"])
def get_products():

    products = Product.query.order_by(
        Product.created_at.desc()
    ).all()

    result = []

    for product in products:

        farmer = User.query.get(product.farmer_id)

        result.append({

            "id": product.id,

            "name": product.name,

            "category": product.category,

            "quantity": product.quantity,

            "unit": product.unit,

            "price": product.price,

            "location": product.location,

            "description": product.description,

            "image": product.image,

            "farmer": {
                "id": farmer.id,
                "name": farmer.name
            } if farmer else None,

            "created_at": product.created_at.isoformat()
        })

    return jsonify(result)


# =========================================================
# SEARCH PRODUCTS
# =========================================================

@app.route("/api/products/search", methods=["GET"])
def search_products():

    search = request.args.get("q", "")

    products = Product.query.filter(
        Product.name.ilike(f"%{search}%")
    ).all()

    result = []

    for product in products:

        result.append({
            "id": product.id,
            "name": product.name,
            "category": product.category,
            "quantity": product.quantity,
            "unit": product.unit,
            "price": product.price,
            "location": product.location,
            "description": product.description
        })

    return jsonify(result)


# =========================================================
# FARMER MY PRODUCTS
# =========================================================

@app.route("/api/farmer/<int:farmer_id>/products", methods=["GET"])
def farmer_products(farmer_id):

    products = Product.query.filter_by(
        farmer_id=farmer_id
    ).all()

    result = []

    for product in products:

        result.append({

            "id": product.id,
            "name": product.name,
            "category": product.category,
            "quantity": product.quantity,
            "unit": product.unit,
            "price": product.price,
            "location": product.location,
            "description": product.description
        })

    return jsonify(result)


# =========================================================
# DELETE PRODUCT
# =========================================================

@app.route("/api/products/<int:product_id>", methods=["DELETE"])
def delete_product(product_id):

    product = Product.query.get(product_id)

    if not product:

        return jsonify({
            "message": "Product not found"
        }), 404

    db.session.delete(product)
    db.session.commit()

    return jsonify({
        "message": "Product deleted successfully"
    })


# =========================================================
# CREATE ORDER
# =========================================================

@app.route("/api/orders", methods=["POST"])
def create_order():

    data = request.get_json()

    buyer_id = data.get("buyer_id")
    product_id = data.get("product_id")
    quantity = data.get("quantity")
    delivery_address = data.get(
        "delivery_address"
    )

    if not buyer_id or not product_id or not quantity:

        return jsonify({
            "message": "Required order information missing"
        }), 400

    buyer = User.query.filter_by(
        id=buyer_id,
        role="buyer"
    ).first()

    if not buyer:

        return jsonify({
            "message": "Buyer not found"
        }), 404

    product = Product.query.get(product_id)

    if not product:

        return jsonify({
            "message": "Product not found"
        }), 404

    quantity = float(quantity)

    if quantity > product.quantity:

        return jsonify({
            "message": "Requested quantity is not available"
        }), 400

    total_price = quantity * product.price

    order = Order(
        buyer_id=buyer_id,
        farmer_id=product.farmer_id,
        product_id=product_id,
        quantity=quantity,
        total_price=total_price,
        delivery_address=delivery_address,
        status="Pending"
    )

    product.quantity -= quantity

    db.session.add(order)
    db.session.commit()

    return jsonify({

        "message": "Order placed successfully",

        "order": {
            "id": order.id,
            "product_id": product_id,
            "quantity": quantity,
            "total_price": total_price,
            "status": order.status
        }

    }), 201


# =========================================================
# BUYER ORDERS
# =========================================================

@app.route("/api/buyer/<int:buyer_id>/orders", methods=["GET"])
def buyer_orders(buyer_id):

    orders = Order.query.filter_by(
        buyer_id=buyer_id
    ).order_by(
        Order.created_at.desc()
    ).all()

    result = []

    for order in orders:

        product = Product.query.get(
            order.product_id
        )

        farmer = User.query.get(
            order.farmer_id
        )

        result.append({

            "id": order.id,

            "product": product.name
            if product else "Unknown",

            "farmer": farmer.name
            if farmer else "Unknown",

            "quantity": order.quantity,

            "total_price": order.total_price,

            "status": order.status,

            "delivery_address":
                order.delivery_address,

            "created_at":
                order.created_at.isoformat()
        })

    return jsonify(result)


# =========================================================
# FARMER ORDERS
# =========================================================

@app.route("/api/farmer/<int:farmer_id>/orders", methods=["GET"])
def farmer_orders(farmer_id):

    orders = Order.query.filter_by(
        farmer_id=farmer_id
    ).order_by(
        Order.created_at.desc()
    ).all()

    result = []

    for order in orders:

        product = Product.query.get(
            order.product_id
        )

        buyer = User.query.get(
            order.buyer_id
        )

        result.append({

            "id": order.id,

            "product": product.name
            if product else "Unknown",

            "buyer": buyer.name
            if buyer else "Unknown",

            "quantity": order.quantity,

            "total_price": order.total_price,

            "status": order.status,

            "delivery_address":
                order.delivery_address,

            "created_at":
                order.created_at.isoformat()
        })

    return jsonify(result)


# =========================================================
# UPDATE ORDER STATUS
# =========================================================

@app.route("/api/orders/<int:order_id>/status", methods=["PUT"])
def update_order_status(order_id):

    data = request.get_json()

    status = data.get("status")

    allowed_status = [
        "Pending",
        "Confirmed",
        "Processing",
        "Shipped",
        "Out for Delivery",
        "Delivered",
        "Cancelled"
    ]

    if status not in allowed_status:

        return jsonify({
            "message": "Invalid order status"
        }), 400

    order = Order.query.get(order_id)

    if not order:

        return jsonify({
            "message": "Order not found"
        }), 404

    order.status = status

    db.session.commit()

    return jsonify({
        "message": "Order status updated",
        "status": status
    })


# =========================================================
# BUYER REQUIREMENT
# =========================================================

@app.route("/api/requirements", methods=["POST"])
def create_requirement():

    data = request.get_json()

    buyer_id = data.get("buyer_id")
    product_name = data.get("product_name")
    quantity = data.get("quantity")
    unit = data.get("unit", "kg")
    max_price = data.get("max_price")
    location = data.get("location")

    if not buyer_id or not product_name or quantity is None:

        return jsonify({
            "message": "Required fields missing"
        }), 400

    buyer = User.query.filter_by(
        id=buyer_id,
        role="buyer"
    ).first()

    if not buyer:

        return jsonify({
            "message": "Buyer not found"
        }), 404

    requirement = Requirement(

        buyer_id=buyer_id,

        product_name=product_name,

        quantity=float(quantity),

        unit=unit,

        max_price=float(max_price)
        if max_price else None,

        location=location

    )

    db.session.add(requirement)
    db.session.commit()

    return jsonify({

        "message":
            "Requirement created successfully",

        "requirement_id":
            requirement.id

    }), 201


# =========================================================
# GET BUYER REQUIREMENTS
# =========================================================

@app.route(
    "/api/buyer/<int:buyer_id>/requirements",
    methods=["GET"]
)
def buyer_requirements(buyer_id):

    requirements = Requirement.query.filter_by(
        buyer_id=buyer_id
    ).all()

    result = []

    for req in requirements:

        result.append({

            "id": req.id,

            "product_name":
                req.product_name,

            "quantity":
                req.quantity,

            "unit":
                req.unit,

            "max_price":
                req.max_price,

            "location":
                req.location,

            "status":
                req.status,

            "created_at":
                req.created_at.isoformat()
        })

    return jsonify(result)


# =========================================================
# SMART MATCHING
# =========================================================

@app.route(
    "/api/matching/<int:requirement_id>",
    methods=["GET"]
)
def smart_matching(requirement_id):

    requirement = Requirement.query.get(
        requirement_id
    )

    if not requirement:

        return jsonify({
            "message": "Requirement not found"
        }), 404

    products = Product.query.filter(
        Product.name.ilike(
            f"%{requirement.product_name}%"
        )
    ).all()

    matches = []

    for product in products:

        score = 0

        # Product name match
        if requirement.product_name.lower() in product.name.lower():

            score += 50

        # Quantity match
        if product.quantity >= requirement.quantity:

            score += 25

        # Price match
        if (
            requirement.max_price is None
            or product.price <= requirement.max_price
        ):

            score += 15

        # Location match
        if (
            requirement.location
            and product.location
            and requirement.location.lower()
            in product.location.lower()
        ):

            score += 10

        farmer = User.query.get(
            product.farmer_id
        )

        matches.append({

            "product_id":
                product.id,

            "product_name":
                product.name,

            "farmer":
                farmer.name
                if farmer else "Unknown",

            "quantity":
                product.quantity,

            "unit":
                product.unit,

            "price":
                product.price,

            "location":
                product.location,

            "match_score":
                score
        })

    matches.sort(
        key=lambda x: x["match_score"],
        reverse=True
    )

    return jsonify({

        "requirement":
            requirement.product_name,

        "matches":
            matches

    })


# =========================================================
# FARMER EARNINGS
# =========================================================

@app.route(
    "/api/farmer/<int:farmer_id>/earnings",
    methods=["GET"]
)
def farmer_earnings(farmer_id):

    orders = Order.query.filter_by(
        farmer_id=farmer_id
    ).all()

    total_earnings = 0
    completed_orders = 0
    pending_orders = 0

    for order in orders:

        if order.status == "Delivered":

            total_earnings += order.total_price

            completed_orders += 1

        else:

            pending_orders += 1

    return jsonify({

        "farmer_id":
            farmer_id,

        "total_earnings":
            total_earnings,

        "completed_orders":
            completed_orders,

        "pending_orders":
            pending_orders,

        "total_orders":
            len(orders)

    })


# =========================================================
# FARMER DASHBOARD
# =========================================================

@app.route(
    "/api/farmer/<int:farmer_id>/dashboard",
    methods=["GET"]
)
def farmer_dashboard(farmer_id):

    products = Product.query.filter_by(
        farmer_id=farmer_id
    ).count()

    orders = Order.query.filter_by(
        farmer_id=farmer_id
    ).all()

    total_sales = sum(
        order.total_price
        for order in orders
        if order.status == "Delivered"
    )

    pending_orders = sum(
        1
        for order in orders
        if order.status == "Pending"
    )

    return jsonify({

        "products":
            products,

        "total_orders":
            len(orders),

        "pending_orders":
            pending_orders,

        "total_sales":
            total_sales

    })


# =========================================================
# BUYER DASHBOARD
# =========================================================

@app.route(
    "/api/buyer/<int:buyer_id>/dashboard",
    methods=["GET"]
)
def buyer_dashboard(buyer_id):

    orders = Order.query.filter_by(
        buyer_id=buyer_id
    ).all()

    requirements = Requirement.query.filter_by(
        buyer_id=buyer_id
    ).count()

    total_spent = sum(
        order.total_price
        for order in orders
        if order.status != "Cancelled"
    )

    return jsonify({

        "total_orders":
            len(orders),

        "active_requirements":
            requirements,

        "total_spent":
            total_spent

    })


# =========================================================
# UPDATE USER PROFILE
# =========================================================

@app.route(
    "/api/users/<int:user_id>",
    methods=["PUT"]
)
def update_user(user_id):

    user = User.query.get(user_id)

    if not user:

        return jsonify({
            "message": "User not found"
        }), 404

    data = request.get_json()

    if data.get("name"):
        user.name = data["name"]

    if data.get("phone"):
        user.phone = data["phone"]

    if data.get("location"):
        user.location = data["location"]

    db.session.commit()

    return jsonify({

        "message":
            "Profile updated successfully",

        "user": {

            "id":
                user.id,

            "name":
                user.name,

            "phone":
                user.phone,

            "email":
                user.email,

            "location":
                user.location,

            "role":
                user.role
        }
    })


# =========================================================
# RUN APPLICATION
# =========================================================

if __name__ == "__main__":

    with app.app_context():

        db.create_all()

    print("====================================")
    print(" Agriculture Marketplace Backend")
    print("====================================")
    print("Server: http://127.0.0.1:5000")

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )