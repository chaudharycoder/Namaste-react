// const heading=React.createElement
// ("h1",
// {id:"heading",class:"myroom",xyz:"ankit"},
// "Hello world from React!");
const heading=React.createElement
("div",
{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("h1",{},"I am also h1 tag")]),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("h1",{},"I am also h1 tag")])]);
console.log(heading);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);