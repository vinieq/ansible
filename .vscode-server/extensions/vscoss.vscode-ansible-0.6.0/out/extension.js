'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
let messageShown = false;
function showDeprecationMessage() {
    return __awaiter(this, void 0, void 0, function* () {
        if (messageShown) {
            return;
        }
        messageShown = true;
        const openExtensionView = 'Open Extensions View';
        const result = yield vscode.window.showInformationMessage('The Ansible extension has been retired. It is no longer maintained. Please uninstall the extension.', openExtensionView);
        if (result === openExtensionView) {
            vscode.commands.executeCommand('workbench.extensions.action.showExtensionsWithIds', ['vscoss.vscode-ansible']);
        }
    });
}
function activate(context) {
    showDeprecationMessage();
    context.subscriptions.push(vscode.commands.registerCommand('vscode-ansible.playbook-in-docker', showDeprecationMessage));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-ansible.playbook-in-localansible', showDeprecationMessage));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-ansible.cloudshell', showDeprecationMessage));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-ansible.ssh', showDeprecationMessage));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-ansible.sync-folder-ssh', showDeprecationMessage));
    context.subscriptions.push(vscode.commands.registerCommand('vscode-ansible.resource-module-samples', showDeprecationMessage));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map