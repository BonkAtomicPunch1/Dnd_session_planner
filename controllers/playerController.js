import Player from "../models/Player.js";

export const getPlayers = async (req, res) => {
  const players = await Player.find();
  res.json({ success: true, data: players });
};

export const createPlayer = async (req, res) => {
  const player = await Player.create(req.body);
  res.status(201).json({ success: true, data: player });
};

export const updatePlayer = async (req, res) => {
  const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ success: true, data: player });
};

export const deletePlayer = async (req, res) => {
  await Player.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};