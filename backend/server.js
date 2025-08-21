import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import cors from 'cors';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Simple file DB helper
const readJson = (file) => {
	const filePath = path.join(__dirname, 'data', file);
	if (!fs.existsSync(filePath)) return [];
	try {
		return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
	} catch (e) {
		return [];
	}
};

const writeJson = (file, data) => {
	const filePath = path.join(__dirname, 'data', file);
	fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

app.get('/api/health', (req, res) => {
	res.json({ status: 'ok', service: 'backend', time: new Date().toISOString() });
});

// Example resources
app.get('/api/projects', (req, res) => {
	res.json(readJson('projects.json'));
});

app.post('/api/projects', (req, res) => {
	const projects = readJson('projects.json');
	const project = { id: Date.now().toString(), ...req.body };
	projects.push(project);
	writeJson('projects.json', projects);
	res.status(201).json(project);
});

app.get('/api/tasks', (req, res) => {
	res.json(readJson('tasks.json'));
});

app.post('/api/tasks', (req, res) => {
	const tasks = readJson('tasks.json');
	const task = { id: Date.now().toString(), ...req.body };
	tasks.push(task);
	writeJson('tasks.json', tasks);
	res.status(201).json(task);
});

app.listen(PORT, () => {
	console.log(`API running on http://localhost:${PORT}`);
});
