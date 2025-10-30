import express from "express";
import {connectDB} from "./config/db.js";
import {Event} from "./models/bookings.js";
const PORT = 3000;
const app = express();
app.use(express.json());
connectDB();

app.get("/bookings", async (req, res) => {
  try{
    const events= await Event.find();
    res.status(200).json(events);
  }catch(error){
    res.status(200).json({error: error.message});
  }
});

app.post("/bookings", async (req, res) => {
  try{
    const event = new Event(req.body);
    await event.save();
    res.status(201).json({message: "Bookings added successfully", event});
  }catch (error){
    res.status(400).json({error: error.message});
  }
});

app.put('/bookings/:id', async(request, response) => {
    try {
        const event = await Event.findByIdAndUpdate(
            request.params.id,
            request.body,
            { new: true, runValidators: true }
        );
        if (!event) {
            return response.status(404).json({ message: "No bookings found" });
        }
        response.status(200).json({ message: "Booking updated successfully", event});
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

app.delete('/bookings/:id', async (request, response) => {
  try{
    const event = await Event.findByIdAndDelete(request.params.id);
    if(!event){
      return response.status(404).json({message: "Booking not found"});
    }
    response.status(200).json({message: "Booking deleted successfully"});
  }catch(error){
    response.status(500).json({error: error.message});
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});