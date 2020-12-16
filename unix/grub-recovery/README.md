# Grub Recovery

1. Install [Kubuntu LTS](https://kubuntu.org/getkubuntu/)
2. Find out the partition with Linux in console.
```sh
sudo fdisk -l
```
3. Mount this partition.
```sh
sudo mount /dev/sda1 /mnt
```
4. Write grub in MBR
```sh
sudo grub-install --root-directory=/mnt /dev/sda
```
5. If you want update grub
```sh
sudo update-grub --output=/mnt/boot/grub/grub.cfg
```