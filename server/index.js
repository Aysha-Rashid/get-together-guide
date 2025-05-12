import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 8084;

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

// Redirect to 42 OAuth
// app.get('/auth/42', (req, res) => {
//   const authURL = `https://api.intra.42.fr/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`;
//   res.redirect(authURL);
// });

// // OAuth callback
// app.get('/auth/callback', async (req, res) => {
//   const { code } = req.query;

//   try {
//     // Exchange code for access token
//     const tokenRes = await axios.post('https://api.intra.42.fr/oauth/token', {
//       grant_type: 'authorization_code',
//       client_id: process.env.CLIENT_ID,
//       client_secret: process.env.CLIENT_SECRET,
//       code,
//       redirect_uri: process.env.REDIRECT_URI,
//     });

//     const accessToken = tokenRes.data.access_token;

//     // Get user info
//     const userRes = await axios.get('https://api.intra.42.fr/v2/me', {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     const user = userRes.data;

//     // Send user back to frontend with basic data
//     res.redirect(`${process.env.FRONTEND_URL}/auth-success?login=${user.login}&name=${user.displayname}`);
//   } catch (err) {
//     console.error('OAuth error:', err.response?.data || err.message);
//     res.status(500).send('Authentication failed');
//   }
// });




// OAuth callback
app.get('/auth/callback', async (req, res) => {
  const { code } = req.query;

  try {
    // Exchange code for access token
    const tokenRes = await axios.post('https://api.intra.42.fr/oauth/token', {
      grant_type: 'authorization_code',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
      redirect_uri: process.env.REDIRECT_URI,
    });

    const accessToken = tokenRes.data.access_token;

    // Get user info
    const userRes = await axios.get('https://api.intra.42.fr/v2/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const user = userRes.data;

    // Hardcoded admin login (replace 'admin_login' with the actual admin login)
    const adminLogin = 'ayal-ras';  // Hardcoded admin username

    // Check if user is the admin
    if (user.login === adminLogin) {
      // Redirect to the admin page
      res.redirect(`${process.env.FRONTEND_URL}/Admin`);
    } else {
      // Redirect to the regular user page
      res.redirect(`${process.env.FRONTEND_URL}/auth-success?login=${user.login}&name=${user.displayname}`);
    }

  } catch (err) {
    console.error('OAuth error:', err.response?.data || err.message);
    res.status(500).send('Authentication failed');
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
