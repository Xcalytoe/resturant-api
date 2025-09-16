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

const deleteMenu = async (req, res) => {
  const menuId = req?.params?.id;
  if (!mongoose.Types.ObjectId.isValid(menuId)) {
    return res.status(404).json({
      message: "Menu not found!",
    });
  }

  const deleted = await Menus.findByIdAndDelete(menuId);
  if (deleted) {
    return res.status(200).json({
      data: null,
      message: "Menu deleted successfully",
    });
  }
};

const updateMenu = async (req, res) => {
  const menuId = req?.params?.id;
  const body = req.body;
  if (!mongoose.Types.ObjectId.isValid(menuId)) {
    return res.status(404).json({
      message: "Menu not found!",
    });
  }
  const updateMenu = await Menus.findByIdAndUpdate(menuId, body, {
    new: true,
    runValidators: true,
  });

  if (updateMenu) {
    res.status(200).json({
      message: "Menu updated successfully",
      data: updateMenu,
    });
  }
};

module.exports = { getMenus, addMenu, getSingleMenu, updateMenu, deleteMenu };
