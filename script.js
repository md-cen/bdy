let highestZ = 1;

class Paper {
  holdingPaper = false;
  startX = 0;
  startY = 0;
  currentX = 0;
  currentY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 20 - 10;
  rotating = false;

  init(paper) {
    const handleMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      if (this.holdingPaper) {
        const dx = clientX - this.startX;
        const dy = clientY - this.startY;

        this.currentX += dx;
        this.currentY += dy;

        this.startX = clientX;
        this.startY = clientY;

        paper.style.transform = `translate(${this.currentX}px, ${this.currentY}px) rotate(${this.rotation}deg)`;
      }
    };

    const handleStart = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      this.holdingPaper = true;
      this.startX = clientX;
      this.startY = clientY;

      paper.style.zIndex = highestZ++;
    };

    const handleEnd = () => {
      this.holdingPaper = false;
    };

    paper.addEventListener('mousedown', handleStart);
    paper.addEventListener('touchstart', handleStart);

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove, { passive: false });

    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);
  }
}

const papers = Array.from(document.querySelectorAll('.paper'));
papers.forEach((paper) => {
  const p = new Paper();
  p.init(paper);
});
