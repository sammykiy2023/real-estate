import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

// use async in th eexport 
// async allows us to use "await" while the user is being saved to avoid errors
// ".save" takes time depending on iunternet speed.

export const signup = async (req, res) =>{   
    const {username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); //hashsync makes the system wait for the hash to finish.
    const newUser = new User ({username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json("User created successfully!")
    } catch (error) {
        res.status(500).json(error.message);
    }
};
    
    