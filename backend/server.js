const app = requiere('./src/app.js');
const PORT = process.env.PORT || 3000;

app.lsiten(PORT, () => {
console.log(`Servicios Backend establecido en http://localhost:${PORT}`);
});