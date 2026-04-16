import Session from "../models/Session.js";

export const getSessions = async (req, res) => {
  const sessions = await Session.find().populate("players");
  res.json({ success: true, data: sessions });
};

export const getSessionById = async (req, res) => {
  const session = await Session.findById(req.params.id).populate("players");
  if (!session) return res.status(404).json({ success: false });
  res.json({ success: true, data: session });
};

export const createSession = async (req, res) => {
  const session = await Session.create(req.body);
  res.status(201).json({ success: true, data: session });
};

export const updateSession = async (req, res) => {
  const session = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ success: true, data: session });
};

export const deleteSession = async (req, res) => {
  await Session.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};