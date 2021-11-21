figma.showUI(__html__, { width: 414, height: 520 });

const setStrokeWeight = (node) => {
    if (node.type === 'GROUP') {
        node.children.forEach((child) => {
            child.strokeWeight = 1.5;
        });
        return;
    }
};

const iconInsert = (payload) => {
    const node = figma.createNodeFromSvg(payload.svg);
    const { x, y } = figma.viewport.center;
    node.name = `swm icon pack / ${payload.name}`;
    node.x = x;
    node.y = y;
    node.constrainProportions = true;
    node.resize(24, 24);
    node.children.forEach((child) => setStrokeWeight(child));
    figma.currentPage.selection = [node];
    figma.notify('Added SWMIcon', { timeout: 1500 });
};

const iconDrop = (payload) => {
    const node = figma.createNodeFromSvg(payload.svg);
    const { x, y } = figma.viewport.center;
    node.name = payload.name;
    node.x = x;
    node.y = y;
    node.constrainProportions = true;
    node.children.forEach((child) => setStrokeWeight(child));
    figma.currentPage.selection = [node];
    figma.notify('Added SWMIcon', { timeout: 1500 });
};

figma.ui.onmessage = ({ type, payload }) => {
    switch (type) {
        case 'insert':
            iconInsert(payload);
            break;
        case 'drop':
            iconDrop(payload);
            break;
    }
};
