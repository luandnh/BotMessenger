const fetch = require('node-fetch');
const getFaceBookUserFullName = async id => {
    let response = await fetch(`https://graph.facebook.com/v5.0/${id}?access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`)
        .catch(err => console.error(err));
    let data = await response.json();
    return data;
}
module.exports = async id => {
    const user = await getFaceBookUserFullName(id);
    console.log(user.first_name);
    const firstName = decodeURIComponent(user.first_name);
    const lastName = decodeURIComponent(user.last_name);
    return lastName + " " + firstName;
}