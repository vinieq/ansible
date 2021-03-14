"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const validationProvider_1 = require("./features/validationProvider");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    let output = vscode.window.createOutputChannel("Ansible");
    let validator = new validationProvider_1.default(context.workspaceState);
    validator.activate(context.subscriptions);
    output.appendLine('Ansible Language extension is now active');
    // output.show();
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map