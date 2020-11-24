// ==============================================================================
// DEPENDENCIES
// Series of npm package(s) that will be used to give server useful functionality
// ==============================================================================

const express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for the express server
// ==============================================================================

// Tells node there is an "express" server created
const app = express();

// Sets an initial port used later in the listener
const PORT = process.env.PORT || 8080;

// ==============================================================================
// Middleware - f(x) executed during the lifecycle of a request to the Express 
// server. Each middleware has access to the HTTP req & res for each route/path 
// it's attached to. (Express itself is compromised wholly of middleware f(x))
// ==============================================================================

// Making the public folder accessible to the client side
app.use(express.static("public"));
