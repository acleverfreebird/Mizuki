# Arch Linux 日常维护与故障修复文章设计

## Goal

写一篇面向 Arch Linux 新手用户的日常维护与故障修复中文教程,作为"ArchLinux安装系列"的第 3 篇,帮助刚完成安装和桌面配置的用户把系统稳定用起来:掌握 pacman 更新的正确姿势、系统健康检查、常见报错修复、内核/引导故障处理与 AUR 维护。

## Recommended Article Metadata

```yaml
title: 'Arch Linux 日常维护与故障修复完全指南'
published: 2026-08-10
description: 'ArchLinux日常维护与故障修复完全指南：涵盖pacman更新与清理、系统健康检查、数据库锁定与keyring错误修复、内核升级黑屏处理、GRUB引导修复、AUR包维护等实用内容，帮助新手从安装完成过渡到稳定日常使用。'
tags: ['ArchLinux', 'pacman', '系统维护', '故障排查', 'GRUB', 'AUR']
category: 'Linux'
draft: false
lang: 'zh-CN'
series: 'ArchLinux安装系列'
seriesOrder: 3
```

## Audience

主要读者:

- 刚按系列前两篇(基础安装、桌面环境)装好 Arch 的新手。
- 已经用 Arch 一段时间、遇到 pacman 报错或内核升级后无法启动但不知道如何下手的用户。

假设知识:

- 会执行基础终端命令。
- 了解 pacman 基本用法(`-S` 安装、`-R` 卸载)。
- 了解 GRUB 引导的基本概念。

## Scope

在范围内:

- pacman 更新的正确姿势与 partial upgrade 风险。
- 缓存与孤儿包清理、磁盘占用检查。
- 系统健康检查(journalctl、systemctl、时间同步、磁盘健康)。
- pacman 常见报错:数据库锁定、keyring 过期、文件冲突、损坏包重装。
- 内核升级后黑屏/无法启动的回退方法、mkinitcpio 重建 initramfs。
- 从 Live USB 通过 arch-chroot 修复 GRUB。
- AUR 与第三方源维护。

不在范围内:

- 重复安装细节(指向系列前两篇)。
- 桌面环境配置细节(指向 archmore 篇)。
- 备份方案细节(指向已有的 Btrfs 快照备份篇,只做链接提示)。
- Windows/WSL 相关内容。

## Relationship To Existing Content

- 链接 `src/content/posts/archinstaller/index.md`(系列第 1 篇,安装)。
- 链接 `src/content/posts/archmore/index.md`(系列第 2 篇,桌面环境,其中含 archlinuxcn 源配置)。
- 链接 `src/content/posts/btrfs-snapshot-backup-guide/index.md`(备份篇,维护速查表处提示"出事先备份")。

## Recommended Structure

### 1. 前言

说明"安装完成只是开始",给出维护三原则:及时更新、勤看日志、出事先备份。

### 2. 日常更新与 pacman 基本功

- `pacman -Syu` 是唯一推荐的更新方式。
- 解释 partial upgrade 风险:不要单独 `pacman -Sy`,不要用 `-Sy` 加装单个包。
- 清理缓存:`pacman -Sc`(保留最近版本)、`pacman -Scc`(全部清空)、`paccache -r` 更精细。
- 清理孤儿包:`pacman -Qtdq | pacman -Rns -`。
- 磁盘占用:`du -sh *`、`ncdu`(可选)。

### 3. 系统健康检查清单

- `journalctl -b -p err` 看本次启动的错误日志。
- `systemctl --failed` 查看失败的服务。
- `timedatectl` / `systemctl enable --now systemd-timesyncd` 时间同步。
- `smartctl -H /dev/sdX` 简略提示磁盘健康(可选项,依赖 smartmontools)。

### 4. pacman 常见报错与修复

- `unable to lock database` → 删除 `/var/lib/pacman/db.lck`。
- `PGP signature` 错误/keyring 过期 → `pacman-key --init && pacman-key --populate archlinux`,必要时 `pacman-key --refresh-keys`。
- `file exists in filesystem` → `pacman -Qo <路径>` 判断归属,再用 `pacman -S --overwrite <包>`。
- 包损坏/校验失败 → `pacman -S <包> --overwrite` 或重装 `pacman -S <包> --noconfirm` 前先 `pacman -Qkk <包>`。

### 5. 内核升级与引导故障

- 升级后黑屏/无法登录:GRUB 高级选项回退旧内核。
- 重建 initramfs:`mkinitcpio -P`。
- 从 Live USB 修复:挂载根分区与 EFI 分区 → `arch-chroot` → `grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB` → `grub-mkconfig -o /boot/grub/grub.cfg`。
- 提示 Btrfs 快照回滚(链接备份篇)。

### 6. AUR 与第三方源维护

- yay/paru 升级与清理:`yay -Yc`。
- AUR 包编译失败:检查 makepkg 环境、依赖、PATCH;报错保留 `-v` 日志。
- archlinuxcn 源:指向 archmore 篇已讲过的配置。

### 7. 维护速查表 + 结语

- 一张命令速查表(按场景列出)。
- 结语重申三原则,附备份篇链接。

## Style Notes

- 中文、教程语气,与系列前两篇一致。
- 代码块一律用 bash,命令前不加 `$` 提示符(与 archmore 一致)。
- 关键命令加粗,配简短"命令参数说明"式列表(参考 archmore 的写法)。
- 不配截图(image 留空,与 vscode-installation-arch-linux 一致)。
