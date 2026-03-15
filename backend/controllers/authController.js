import bcrypt from "bcryptjs";
import { supabase } from "../config/supabaseClient.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from("users")
      .insert([{ name, email, password: hashedPassword }])
      .select();

    if (error) return res.status(400).json({ error: error.message });

    const token = generateToken(data[0].id);

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Signup failed" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (!data) return res.status(404).json({ message: "User not found" });

  const match = await bcrypt.compare(password, data.password);

  if (!match) return res.status(401).json({ message: "Invalid password" });

  const token = generateToken(data.id);

  res.json({ token });
};