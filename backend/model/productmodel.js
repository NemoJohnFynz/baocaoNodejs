import sequelize from "../config/database";
import { DataTypes } from 'sequelize';

const Product = sequelize.define('Products', {
    id_product: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    category_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    discount: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    stock: {
        type: DataTypes.NUMBER,
        allowNull: true,
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM,
        allowNull: true,
    },
})
export default Product;