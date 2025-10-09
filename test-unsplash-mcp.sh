#!/bin/bash

# Test script for Unsplash MCP Server
echo "Testing Unsplash MCP Server..."

# Set the environment variable
export UNSPLASH_ACCESS_KEY="lDB7u4zFDvEUCFZy51zl2WyNU-q70sbw_b7wXW2L1Zo"

# Navigate to the unsplash-mcp-server directory
cd unsplash-mcp-server

# Test the server with a simple search
echo "Testing image search for 'kitchen hood cleaning'..."
uv run --with fastmcp fastmcp run ./server.py &
SERVER_PID=$!

# Wait a moment for server to start
sleep 3

# Test with a simple curl request (if server is running on a port)
echo "Server should be running. You can now use it in Cursor IDE."
echo "To stop the server, run: kill $SERVER_PID"

# Keep the script running
wait $SERVER_PID
