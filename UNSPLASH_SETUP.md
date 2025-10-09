# Unsplash MCP Server Setup Guide

## ✅ Installation Complete!

Your Unsplash MCP server has been successfully installed and configured. Here's what was set up:

### 📁 Files Created/Modified:
- **`.cursor-settings.json`** - Cursor IDE configuration with your Unsplash access key
- **`test-unsplash-mcp.sh`** - Test script to verify the server is working
- **`unsplash-mcp-server/`** - Cloned repository with all dependencies installed

### 🔧 Configuration Details:

Your Cursor IDE is now configured with:
```json
{
  "mcpServers": {
    "unsplash": {
      "command": "uv",
      "args": ["run", "--with", "fastmcp", "fastmcp", "run", "./unsplash-mcp-server/server.py"],
      "env": {
        "UNSPLASH_ACCESS_KEY": "lDB7u4zFDvEUCFZy51zl2WyNU-q70sbw_b7wXW2L1Zo"
      }
    }
  }
}
```

### 🚀 How to Use:

1. **Restart Cursor IDE** to load the new MCP server configuration
2. **Test the server** by running: `./test-unsplash-mcp.sh`
3. **Use in Cursor** - The Unsplash MCP server will now be available as a tool

### 🔍 Available Tools:

The Unsplash MCP server provides these tools:
- **`search_photos`** - Search for images with filters for:
  - Keyword relevance
  - Color schemes  
  - Orientation options
  - Custom sorting and pagination

### 📝 Example Usage:

Once Cursor IDE is restarted, you can use commands like:
- "Search for kitchen hood cleaning images"
- "Find commercial kitchen photos with landscape orientation"
- "Get 5 images of restaurant exhaust systems"

### 🛠️ Troubleshooting:

If you encounter issues:
1. **Check uv installation**: `which uv` should show the path
2. **Verify dependencies**: `cd unsplash-mcp-server && uv pip list`
3. **Test server manually**: `cd unsplash-mcp-server && UNSPLASH_ACCESS_KEY="your_key" uv run --with fastmcp fastmcp run ./server.py`

### 🔑 Your Unsplash Access Key:
- **Key**: `lDB7u4zFDvEUCFZy51zl2WyNU-q70sbw_b7wXW2L1Zo`
- **Status**: ✅ Configured and ready to use

### 📚 Next Steps:

1. **Restart Cursor IDE** to activate the MCP server
2. **Test image search** functionality
3. **Use for your hood cleaning articles** to get better, more relevant images
4. **Replace existing Unsplash URLs** with dynamically searched images

The Unsplash MCP server is now ready to enhance your LocalBizzList project with high-quality, relevant images! 🎉
