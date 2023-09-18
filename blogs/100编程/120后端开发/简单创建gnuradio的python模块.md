---
title: 简单创建gnuradio的python模块
date: 2023-09-13 13:22
tags:
 - 工作
 - 无线电
 - gnuradio
categories:
 - 工作
---



# 简单创建gnuradio的python模块



## 开发环境

操作系统：Windows10

GUN Radio安装版本：radioconda-2023.07.26-Windows-x86_64

因python版也需要c++环境，安装C++开发环境: [Windows10下配置CMake+Make+Cpp环境](./Windows10下配置CMake+Make+Cpp环境.html)



## 创建模块

使用`.\radioconda\Scripts\gr_modtool.exe newmod jzfreqjsonpython`命令创建一个空的名为`jzfreqjsonpython`的GNU Radio模块

## 添加模块



使用`.\radioconda\Scripts\gr_modtool.exe add jzfreqjsonpython`命令添加`jzfreqjsonpython`模块到GNU Radio

操作配置和修改文件内容参考[官网文档](https://wiki.gnuradio.org/index.php?title=Creating_C%2B%2B_OOT_with_gr-modtool)

## 编译模块

```
mkdir build
cd build
cmake ..
```



### ninja: fatal: CreateProcess: 拒绝访问。

#### 错误提示

```
(base) PS D:\Users\0461\block\gr-jzfreqjsonpython\build> cmake ..
-- The CXX compiler identification is unknown
-- The C compiler identification is GNU 13.1.0
-- Detecting CXX compiler ABI info
-- Detecting CXX compiler ABI info - failed
-- Check for working CXX compiler: D:/msys64/mingw64/bin/c++.exe
-- Check for working CXX compiler: D:/msys64/mingw64/bin/c++.exe - broken
CMake Error at D:/msys64/mingw64/share/cmake/Modules/CMakeTestCXXCompiler.cmake:60 (message):
  The C++ compiler

    "D:/msys64/mingw64/bin/c++.exe"

  is not able to compile a simple test program.

  It fails with the following output:

    Change Dir: D:/Users/0461/block/gr-jzfreqjsonpython/build/CMakeFiles/CMakeScratch/TryCompile-8je5q3

    Run Build Command(s):C:/ProgramData/anaconda3/Library/bin/ninja.exe -v cmTC_9e4d2 &&
    CreateProcess failed. Command attempted:
    "D:\msys64\mingw64\bin\c++.exe    -o CMakeFiles\cmTC_9e4d2.dir\testCXXCompiler.cxx.obj -c D:\Users\0461\block\gr-jzfreqjsonpython\build\CMakeFiles\CMakeScratch\TryCompile-8je5q3\testCXXCompiler.cxx"
    ninja: fatal: CreateProcess: 拒绝访问。






  CMake will not be able to correctly generate this project.
Call Stack (most recent call first):
  CMakeLists.txt:18 (project)


-- Configuring incomplete, errors occurred!
```

#### 解决办法

设置cmake目录

在模块目录下的CMakeLists.txt文件中添加CMAKE_PREFIX_PATH变量，路径为安装目录+`\Library\lib\cmake`

`set(CMAKE_PREFIX_PATH D:\Users\0461\radioconda\Library\lib\cmake)`



### Could not find a package configuration file provided by "pybind11" with any of the following names:

#### 错误提示

```
D:\Users\0461\block\gr-jztofreqjson\build>cmake ..
CMake Warning (dev) at CMakeLists.txt:8 (set):
  Syntax error in cmake code at

    D:/Users/0461/block/gr-jztofreqjson/CMakeLists.txt:8

  when parsing string

    D:\Users\0461\radioconda\Library\lib\cmake

  Invalid escape sequence \U

  Policy CMP0010 is not set: Bad variable reference syntax is an error.  Run
  "cmake --help-policy CMP0010" for policy details.  Use the cmake_policy
  command to set the policy and suppress this warning.
This warning is for project developers.  Use -Wno-dev to suppress it.

-- Using GMP.
-- User set python executable D:/Users/0461/radioconda/python.exe
-- Extracting version information from git describe...
fatal: No names found, cannot describe anything.
-- Could NOT find Doxygen (missing: DOXYGEN_EXECUTABLE)
-- Using install prefix: C:/Program Files (x86)/gr-jztofreqjson
-- Building for version: 1.0.0.0 / 1.0.0
-- No C++ unit tests... skipping
-- Could NOT find Doxygen (missing: DOXYGEN_EXECUTABLE)
-- PYTHON and GRC components are enabled
-- Python checking for pygccxml - not found
CMake Error at D:/Users/0461/radioconda/Library/lib/cmake/gnuradio/GrPybind.cmake:3 (find_package):
  By not providing "Findpybind11.cmake" in CMAKE_MODULE_PATH this project has
  asked CMake to find a package configuration file provided by "pybind11",
  but CMake did not find one.

  Could not find a package configuration file provided by "pybind11" with any
  of the following names:

    pybind11Config.cmake
    pybind11-config.cmake

  Add the installation prefix of "pybind11" to CMAKE_PREFIX_PATH or set
  "pybind11_DIR" to a directory containing one of the above files.  If
  "pybind11" provides a separate development package or SDK, be sure it has
  been installed.
Call Stack (most recent call first):
  python/jztofreqjson/bindings/CMakeLists.txt:25 (include)


-- Configuring incomplete, errors occurred!
```

#### 解决办法

执行命令`pacman -S mingw-w64-x86_64-pybind11`安装pybind11解决



## 执行编译脚本

build.bat

```bat
rm -rf build

set CMAKE_PREFIX_PATH=D:\Users\0461\radioconda\Library\lib\cmake
set CMAKE_INSTALL_PREFIX=.\build
set CMAKE_C_COMPILER=gcc
set CMAKE_CXX_COMPILER=g++
mkdir build
cd build
@REM 编译为unix版本的makefile
@REM cmake .. -G "Unix Makefiles"
@REM 编译为MinGW版本的makefile
cmake .. -G "MinGW Makefiles"
make
make install
cd ..

```



## 结果

编译失败，如有需要待后续更新
