export class PlaceholderRenderer {
    static drawHeaderPlaceholder(ctx, canvas) {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2 - 15; // Adjusted for new height
        const iconSize = 40; // Smaller icon for smaller canvas
        
        const svgData = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23666' d='M8 19.385V9.61q0-.671.475-1.14T9.621 8h9.764q.67 0 1.143.472q.472.472.472 1.144v6.961L16.577 21H9.615q-.67 0-1.143-.472Q8 20.056 8 19.385M3.025 6.596q-.13-.671.258-1.208t1.06-.669l9.619-1.694q.67-.13 1.208.258t.669 1.06l.211 1.273h-1.012l-.213-1.193q-.038-.211-.23-.336T14.17 4L4.52 5.714q-.269.038-.404.25q-.134.211-.096.48l1.596 9.016v1.936q-.342-.167-.581-.475q-.24-.307-.315-.705zM9 9.616v9.769q0 .269.173.442t.443.173H16l4-4V9.616q0-.27-.173-.443T19.385 9h-9.77q-.269 0-.442.173T9 9.616M14 18h1v-3h3v-1h-3v-3h-1v3h-3v1h3z'/%3E%3C/svg%3E`;
        
        const icon = new Image();
        icon.onload = () => {
            ctx.drawImage(icon, centerX - iconSize/2, centerY - iconSize/2, iconSize, iconSize);
            
            ctx.fillStyle = '#666';
            ctx.font = '24px "Funnel Display", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Header Image Here', centerX, centerY + iconSize/2 + 30);
        };
        icon.src = svgData;
    }

    static drawPfpPlaceholder(ctx, pfpX, pfpY) {
        // Fill circular background when no pfp image
        ctx.fillStyle = '#1a1a1a';
        ctx.beginPath();
        ctx.arc(pfpX, pfpY, 100, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw pfp placeholder within the circular area
        const pfpIconSize = 40; // Smaller for new canvas size
        const adjustedPfpY = pfpY - 12; // Less adjustment needed
        const svgData = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23666' d='M8 19.385V9.61q0-.671.475-1.14T9.621 8h9.764q.67 0 1.143.472q.472.472.472 1.144v6.961L16.577 21H9.615q-.67 0-1.143-.472Q8 20.056 8 19.385M3.025 6.596q-.13-.671.258-1.208t1.06-.669l9.619-1.694q.67-.13 1.208.258t.669 1.06l.211 1.273h-1.012l-.213-1.193q-.038-.211-.23-.336T14.17 4L4.52 5.714q-.269.038-.404.25q-.134.211-.096.48l1.596 9.016v1.936q-.342-.167-.581-.475q-.24-.307-.315-.705zM9 9.616v9.769q0 .269.173.442t.443.173H16l4-4V9.616q0-.27-.173-.443T19.385 9h-9.77q-.269 0-.442.173T9 9.616M14 18h1v-3h3v-1h-3v-3h-1v3h-3v1h3z'/%3E%3C/svg%3E`;
        
        const pfpIcon = new Image();
        pfpIcon.onload = () => {
            ctx.drawImage(pfpIcon, pfpX - pfpIconSize/2, adjustedPfpY - pfpIconSize/2, pfpIconSize, pfpIconSize);
            
            ctx.fillStyle = '#666';
            ctx.font = '24px "Funnel Display", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Logo Here', pfpX, adjustedPfpY + pfpIconSize/2 + 25);
        };
        pfpIcon.src = svgData;
    }
}