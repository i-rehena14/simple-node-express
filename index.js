const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// const handler=(req,res)=>{
//     res.send('hello from node');
// }

//app.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
});

app.get('/', (req, res) => {
    res.send('hello from node..auto restart');
});
const users = [
    { id: 0, name: 'shabana', email: 'shabana24@gmail.com' },
    { id: 1, name: 'Kolpona', email: 'Kolpona@gmail.com' },
    { id: 2, name: 'shraboni', email: 'shraboni@gmail.com' },
    { id: 3, name: 'shaira', email: 'shaira@gmail.com' },
    { id: 4, name: 'saba', email: 'saba@gmail.com' }]
app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

})
//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    // console.log(req.params.id);
})

app.listen(port, () => {
    console.log('listening to port');
})