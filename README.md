Setup Instructions (For New Developers)

1. Install Visual Studio Code from Microsoft on a PC. (https://code.visualstudio.com/download?_exp_download=fb315fc982)
   
2. Clone the repository
git clone https://github.com/jamesbass172-dev/the-digital-revival.git
cd the-digital-revival

3. Install dependencies
- Make sure you are using Node.js 20 or higher.
- Check your version: node -v
- If needed (using nvm): nvm install 20, nvm use 20

4. Install packages: npm install

6. Start development server: npm run dev

The app will start at:

http://localhost:5173
4. Build for production (optional)
npm run build
5. Preview production build (optional)
npm run preview

If something breaks

Try a clean reinstall:

rm -rf node_modules package-lock.json
npm install
npm run dev
