document.addEventListener('DOMContentLoaded', async () => { 

    const envBadge = document.getElementById('env-badge'); 

    const appVersion = document.getElementById('app-version'); 

 

    try { 

        const res = await fetch('/api/info'); 

        const data = await res.json(); 

 

        envBadge.textContent = data.environment; 

        appVersion.textContent = `App Version: ${data.version}`; 

    } catch (err) { 

        envBadge.textContent = 'Error'; 

        envBadge.style.background = '#fee2e2'; 

        envBadge.style.color = '#991b1b'; 

    } 

});