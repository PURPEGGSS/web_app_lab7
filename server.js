require('dotenv').config(); // Load environment variables from .env file 

const express = require('express'); 

const cors = require('cors'); 

const path = require('path'); 



const app = express(); 


// Dynamically bind to Cloud Provider Port or default local port 

const PORT = process.env.PORT || 3000; 

const NODE_ENV = process.env.NODE_ENV || 'development'; 



// Security & Middleware Configuration 

app.use(cors()); 

app.use(express.json()); 



// Serve Static Frontend Assets from the 'public' directory 

app.use(express.static(path.join(__dirname, 'public'))); 



// Health Check Endpoint for Monitoring/Uptime Services 

app.get('/health', (req, res) => { 

    res.status(200).json({ status: 'UP', environment: NODE_ENV, timestamp: new Date() }); 

}); 



// Production API Endpoint 

app.get('/api/info', (req, res) => { 

    res.status(200).json({ 

        appName: 'Production Web Portal', 

        version: '1.0.0', 

        environment: NODE_ENV 

    });
}); 



// Fallback Route: Serve index.html for Single Page Application (SPA) routing 



app.get(/.*/, (req, res) => { 

    res.sendFile(path.join(__dirname, 'public', 'index.html')); 

}); 



app.listen(PORT, () => { 

    console.log(`[${NODE_ENV.toUpperCase()}] Server running on port ${PORT}`); 

}); 