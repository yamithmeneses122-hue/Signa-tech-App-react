const fs = require('fs');
const path = require('path');

const componentsDir = 'src/features/administrador/components';
const viewsDir = 'src/features/administrador/views';
fs.mkdirSync(componentsDir, { recursive: true });
fs.mkdirSync(viewsDir, { recursive: true });

fs.copyFileSync('src/components/shared/Header.jsx', path.join(componentsDir, 'Header.jsx'));
fs.copyFileSync('src/components/shared/Footer.jsx', path.join(componentsDir, 'Footer.jsx'));

let sidebar = fs.readFileSync('recovery_files/Sidebar.jsx', 'utf8');
sidebar = sidebar.replace(/import '\.\.\/styles\/index\.css';/g, "import '../../../styles/index.css';");
sidebar = sidebar.replace(/import { useState, useEffect, useCallback } from 'react';/, "import { useState, useEffect, useCallback } from 'react';\nimport { useLocation, Link } from 'react-router-dom';");
sidebar = sidebar.replace(/<a\s+href=\{link\.href\}/g, "<Link to={link.href}");
sidebar = sidebar.replace(/<\/a>/g, "</Link>");
sidebar = sidebar.replace(/<a\s+href="\/login"/g, "<Link to=\"/login\"");
sidebar = sidebar.replace(/menuAbierto/g, 'menuAbierto').replace(/Menú/g, 'Menú').replace(/Menuº/g, 'Menú').replace(/menú-lado/g, 'menu-lado').replace(/menú-abierto/g, 'menu-abierto');
// Double encoding fix fallback
try { sidebar = Buffer.from(sidebar, 'latin1').toString('utf8'); } catch(e){}
fs.writeFileSync(path.join(componentsDir, 'Sidebar.jsx'), sidebar, 'utf8');

const views = ['DashboardAdmin.jsx', 'GestionUsuarios.jsx', 'GestionRoles.jsx', 'DiccionarioAdmin.jsx', 'AprobacionSenas.jsx', 'Configuracion.jsx'];
for (const v of views) {
    let content = fs.readFileSync(path.join('recovery_files', v), 'utf8');
    
    // Fix imports
    content = content.replace(/import '\.\.\/styles\/index\.css';/g, "import '../../../styles/index.css';");
    content = content.replace(/import '\.\.\/\.\.\/styles\/index\.css';/g, "import '../../../styles/index.css';");
    
    content = content.replace(/from '\.\.\/Hooks\/useToast';/g, "from '../../../Hooks/useToast';");
    content = content.replace(/from '\.\.\/\.\.\/Hooks\/useToast';/g, "from '../../../Hooks/useToast';");
    
    content = content.replace(/from '\.\/Sidebar';/g, "from '../components/Sidebar';");
    
    // Double encoding fix fallback
    try {
        const decoded = Buffer.from(content, 'latin1').toString('utf8');
        if (decoded.includes('Gestión')) content = decoded;
    } catch(e){}
    
    fs.writeFileSync(path.join(viewsDir, v), content, 'utf8');
}

let app = fs.readFileSync('src/App.jsx', 'utf8');
app = app.replace(/\.\/Features\/Administrator\/Components\//g, './features/administrador/views/');
app = app.replace(/\.\/components\/shared\//g, './features/administrador/views/');
fs.writeFileSync('src/App.jsx', app, 'utf8');

console.log('Restored and refactored!');
