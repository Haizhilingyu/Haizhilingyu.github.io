Windows10下配置CMake+Make+Cpp环境
============================

1\. 简介
------

在 Linux 上使用 CMake+Make+Cpp 环境简直不要太轻松，大多数 Linux 发行版都自带 Make 和 GCC，因此只需用命令安装一下 CMake 后即可使用。但在 Windows 10 上却需要好好配置一番才能使用……

2\. 配置 MinGW-w64
----------------

MingGW-w64 项目旨在 Windows 系统上支持 GCC 编译器，其为 Windows 提供了使用 GCC 编译器的功能。为了更好地在 Windows 系统上使用 GCC 编译器，出现了一些工具合集软件，它们整合了更完备的 GCC 编译器环境供 Windows 系统下使用。比如 [Cygwin](https://cygwin.com/) 和 [MSYS2](https://www.msys2.org/)，这里我个人推荐安装 MSYS2 包。

安装好 MSYS2 软件包后，在 Windows 10 的菜单栏中找到 MSYS2，然后打开 `MSYS2 MSYS` 程序，其提供了类 Arch 的终端环境（Archer 狂喜），然后安装一系列的 GCC 编译链工具：

```shell
pacman -S mingw-w64-x86_64-gcc
pacman -S mingw-w64-x86_64-cmake mingw-w64-x86_64-extra-cmake-modules
pacman -S mingw-w64-x86_64-make
pacman -S mingw-w64-x86_64-gdb
pacman -S mingw-w64-x86_64-toolchain
```

安装完这些编译链工具后，找到 MSYS2 的安装路径（我这里是 `C:\msys64`），将 `C:\msys64\mingw64\bin` 加入到系统变量 `Path` 中：

*   「此电脑右键」->「属性」->「高级系统设置」->「环境变量」，然后选择 `Path` 变量进行「编辑」，加入 `C:\msys64\mingw64\bin` 路径。
    
    > 按照上述步骤安装完后，`C:\msys64\mingw64\bin` 路径下应当有一系列的工具，如 `gcc.exe`、`g++.exe`、`cmake.exe` 和 `mingw32-make.exe` 等。
    

此外，为了使用方便，将 `C:\msys64\mingw64\bin` 目录下的 `mingw32-make.exe` 复制一份并重命名为 `make.exe`。

3\. 使用 CMake + Make
-------------------

对于创建的 Cpp 项目，在其中写好 `CMakeLists.txt` 文件后，可以在 PowerShell 中按如下步骤进行编译：

```shell
mkdir build
cd build
cmake .. -G "MinGW Makefiles"		# 此项参数一定要加，不然默认使用 Windows 自带的 nmake 而不是 MinGW 的 make 工具
make								# 如果没有上述的复制重命名操作，则需使用 mingw32-make 命令
```

附录
--

*   [MinGW-w64](https://www.mingw-w64.org/)
*   [Installing GCC: Binaries](https://gcc.gnu.org/install/binaries.html)
*   [CMake on Windows Tutorial 1](https://zhuanlan.zhihu.com/p/497839595)

文章作者: [hotarugali](https://hotarugali.github.io)

文章链接: [https://hotarugali.github.io/2022/08/28/Technique/Windows/Windows10下配置CMake+Make+Cpp环境/](https://hotarugali.github.io/2022/08/28/Technique/Windows/Windows10%E4%B8%8B%E9%85%8D%E7%BD%AECMake+Make+Cpp%E7%8E%AF%E5%A2%83/)

