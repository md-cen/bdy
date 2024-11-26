// Get all draggable elements
const draggableElements = document.querySelectorAll(".draggable");

draggableElements.forEach((element) => {
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    // Function to handle start of drag
    const startDrag = (event) => {
        isDragging = true;

        // Prevent default to avoid scroll issues on mobile
        event.preventDefault();

        // Handle touch or mouse input
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;

        // Calculate the offset
        offsetX = clientX - element.offsetLeft;
        offsetY = clientY - element.offsetTop;
    };

    // Function to handle drag movement
    const drag = (event) => {
        if (!isDragging) return;

        // Prevent default to avoid scroll issues
        event.preventDefault();

        // Handle touch or mouse input
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        const clientY = event.touches ? event.touches[0].clientY : event.clientY;

        // Move the element
        element.style.left = `${clientX - offsetX}px`;
        element.style.top = `${clientY - offsetY}px`;
    };

    // Function to handle end of drag
    const endDrag = () => {
        isDragging = false;
    };

    // Add mouse events
    element.addEventListener("mousedown", startDrag);
    element.addEventListener("mousemove", drag);
    element.addEventListener("mouseup", endDrag);
    element.addEventListener("mouseleave", endDrag);

    // Add touch events
    element.addEventListener("touchstart", startDrag);
    element.addEventListener("touchmove", drag);
    element.addEventListener("touchend", endDrag);
});
