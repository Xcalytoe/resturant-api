const mongoose = require("mongoose");
const Menus = require("../models/Menu");

const getMenus = async (_, res) => {
  const menus = await Menus.find();
  return res.status(200).json({
    data: menus,
    message: "Data retireved successfully",
  });
};

const addMenu = async (req, res) => {
  const body = req?.body;
  const menu = await Menus.create(body);
  res.status(201).json({
    message: "Menu added successfully",
    data: menu,
  });
};

const getSingleMenu = async (req, res) => {
  const menuId = req?.params?.id;
  if (!mongoose.Types.ObjectId.isValid(menuId)) {
    return res.status(404).json({
      message: "Menu not found!",
    });
  }
  const menu = await Menus.findById(menuId);

  if (menu) {
    return res.status(200).json({
      data: menu,
      message: "Data retireved successfully",
    });
  }
};

module.exports = { getMenus, addMenu, getSingleMenu };
