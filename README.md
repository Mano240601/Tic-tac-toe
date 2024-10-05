from docx import Document

# Create a new Document
doc = Document()
doc.add_heading('README.md', 0)

# Title
doc.add_heading('Tic-Tac-Toe Game', level=1)
doc.add_paragraph("A simple Tic-Tac-Toe game built with HTML, CSS, and JavaScript, allowing users to play either Player vs Player or Human vs Computer modes.")

# Features
doc.add_heading('Features', level=2)
doc.add_paragraph("- **Player vs Player Mode**: Two human players can play alternately on the same device.")
doc.add_paragraph("- **Human vs Computer Mode**: Play against a simple AI that makes random moves.")
doc.add_paragraph("- **Responsive Design**: The game is responsive and works well on both desktop and mobile devices.")
doc.add_paragraph("- **Reset Function**: Easily reset the game to start a new round.")
doc.add_paragraph("- **Winning Logic**: Detects winners based on Tic-Tac-Toe winning conditions or declares a draw if no moves are left.")

# Project Structure
doc.add_heading('Project Structure', level=2)
doc.add_paragraph("- **HTML**: Sets up the structure for the game board and interface.")
doc.add_paragraph("- **CSS**: Styles the game layout, including a background image, buttons, and grid-based game cells.")
doc.add_paragraph("- **JavaScript**: Handles the game logic, player moves, and mode selection.")

# Getting Started
doc.add_heading('Getting Started', level=2)
doc.add_paragraph("To get a copy of the project up and running locally, follow these simple steps:")

# Prerequisites
doc.add_heading('Prerequisites', level=3)
doc.add_paragraph("You’ll need a web browser like Google Chrome, Firefox, or any other modern browser to view the project.")

# Installation
doc.add_heading('Installation', level=3)
doc.add_paragraph('1. Clone this repository to your local machine using:')
doc.add_paragraph('```bash\ngit clone https://github.com/your-username/tic-tac-toe-game.git\n```')
doc.add_paragraph('2. Navigate to the project folder:')
doc.add_paragraph('```bash\ncd tic-tac-toe-game\n```')
doc.add_paragraph('3. Open the `index.html` file in your preferred browser or use a live server.')

# Files
doc.add_heading('Files', level=2)
doc.add_paragraph('- **index.html**: The main HTML file that structures the page.')
doc.add_paragraph('- **tic-tac-toe.css**: The CSS file that contains the styles for the game.')
doc.add_paragraph('- **tic-tac-toe.js**: The JavaScript file that contains the game logic.')

# How to Play
doc.add_heading('How to Play', level=2)
doc.add_paragraph('1. Open the game in a web browser.\n2. Choose a mode:\n- Player vs Player\n- Human vs Computer\n3. Click on a cell to make your move.\n4. The game checks for a winner or a draw.')

# Customization
doc.add_heading('Customization', level=2)
doc.add_paragraph("You can customize the game by modifying the following:\n- **Background Images**: Update the `background-image` property in the CSS.\n- **AI Difficulty**: Modify the `computerMove()` function for more advanced AI.")

# License
doc.add_heading('License', level=2)
doc.add_paragraph("This project is licensed under the MIT License.")

# Save the document
file_path = "/mnt/data/TicTacToe_README.docx"
doc.save(file_path)

file_path
