sudo su
ansible-inventory --list
ll
pwd
ansible-inventory -i inventory --list
pwd
ll
cat ansible.cfg 
ansible --version
ansible databases --limit db1 -m ping
cat /etc/ansible/ansible.cfg 
less /etc/ansible/ansible.cfg 
ansible databases --limit db1 -m ping
ll
ansible -m ping all
ll
---
all:
  hosts: 
    ubuntu11:
      ansible_host: 192.168.50.11 
      ansible_private_key_file: .vagrant/machines/ubuntu11/virtualbox/private_key
# As an exercise, add a third ubuntu VM in the Vagrantfile and uncomment the following to add it to Ansible's inventory:
#    ubuntu12:
#      ansible_host: 192.168.50.12
#      ansible_private_key_file: .vagrant/machines/ubuntu12/virtualbox/private_key
