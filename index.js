const express = require('express');
const bodyParser = require('body-parser');
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`server started at PORT:${PORT}`);

});


app.get('/send-req', async (req, res) => {
    //const { method, url, headers } = req.body;

    try {
        let data = JSON.stringify({
            "messaging_product": "whatsapp",
            "to": "918250328987",
            "type": "template",
            "template": {
                "name": "instagram_live_notification",
                "language": {
                    "code": "en"
                },


                
        "components": [
            {
                "type": "body",
                "parameters": [
                    {
                        "type": "text",
                        "text": "Myapp"
                    },
                    {
                        "type": "text",
                        "text": "March 2nd"
                    }
                    
                ]
            }
                ]
            }
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://graph.facebook.com/v18.0/213744278497667/messages',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer EAAdtOBX6olwBO6J67mwox9d0F4O8PPBFChfZCTYEE2KrS8UZBFDaxzVRFaepBjR8SAL81UyPxd3zITEmsGFM0ZAyWrdEZAHSsbi4YCyIZAnQCHWn5ulQTLtKtmkhTIZCM68yIpYsxWRplrShsvPyOBhT22h1v9GtAyIB60AVAqG0fjS7HbN1OLQYZAsb8H7kvvMYZCFf5BMvglIwtWIZD',
                'Cookie': 'ps_l=0; ps_n=0'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    }

    catch (error) {
        res.status(500).json({ msg: 'Failed to send request', error: error });
    }

});
