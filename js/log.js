var ArrayBootLog = [
"[    0.000000] Booting BPX on physical CPU 0x0",
"[    0.000000] BPX version 2.4.0-center (gcc version 4.8.3 20140106 (prerelease) (crosstool-NG linaro-1.13.1-4.8-2014.01 - Linaro GCC 2013.11)) #1 SMP Mon Jul 16 02:35:00 UTC 2018",
"[    0.000000] CPU: GPCv7 Processor [410fd034] revision 4 (GPCv7), cr=10c5383d",
"[    0.000000] CPU: div instructions available: patching division code",
"[    0.000000] CPU: PIPT / VIPT nonaliasing data cache, VIPT aliasing instruction cache",
"[    0.000000] OF: fdt: Machine model: BluePhase Center Console Boot v1.3",
"[    0.000000] Memory policy: Data cache writealloc",
"[    0.000000] cma: Reserved 8 MiB at 0x3ac00000",
"[    0.000000] On node 0 totalpages: 242688",
"[    0.000000] free_area_init_node: node 0, pgdat 80c80bc0, node_mem_map ba3a1000",
"[    0.000000]   Normal zone: 2133 pages used for memmap",
"[    0.000000]   Normal zone: 0 pages reserved",
"[    0.000000]   Normal zone: 242688 pages, LIFO batch:31",
"[    0.000000] random: get_random_bytes called from start_kernel+0x7c/0x428 with crng_init=0",
"[    0.000000] percpu: Embedded 17 pages/cpu @ba34a000 s39488 r8192 d21952 u69632",
"[    0.000000] pcpu-alloc: s39488 r8192 d21952 u69632 alloc=17*4096",
"[    0.000000] pcpu-alloc: [0] 0 [0] 1 [0] 2 [0] 3 ",
"[    0.000000] Built 1 zonelists, mobility grouping on.  Total pages: 240555",
"[    0.000000] Kernel command line: 8250.nr_uarts=0 bcm2708_fb.fbwidth=1824 bcm2708_fb.fbheight=984 bcm2708_fb.fbswap=1 vc_mem.mem_base=0x3ec00000 vc_mem.mem_size=0x40000000  dwc_otg.fiq_fix_enable=2 console=ttyS0,115200 kgdboc=ttyS0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 rootwait rootflags=noload net.ifnames=0",
"[    0.000000] PID hash table entries: 4096 (order: 2, 16384 bytes)",
"[    0.000000] Dentry cache hash table entries: 131072 (order: 7, 524288 bytes)",
"[    0.000000] Inode-cache hash table entries: 65536 (order: 6, 262144 bytes)",
"[    0.000000] Memory: 940240K/970752K available (7168K kernel code, 558K rwdata, 2084K rodata, 1024K init, 716K bss, 22320K reserved, 8192K cma-reserved)",
"[    0.000000] Virtual kernel memory layout:",
"                   vector  : 0xffff0000 - 0xffff1000   (   4 kB)",
"                   fixmap  : 0xffc00000 - 0xfff00000   (3072 kB)",
"                   vmalloc : 0xbb800000 - 0xff800000   (1088 MB)",
"                   lowmem  : 0x80000000 - 0xbb400000   ( 948 MB)",
"                   modules : 0x7f000000 - 0x80000000   (  16 MB)",
"                     .text : 0x80008000 - 0x80800000   (8160 kB)",
"                     .init : 0x80b00000 - 0x80c00000   (1024 kB)",
"                     .data : 0x80c00000 - 0x80c8b974   ( 559 kB)",
"                      .bss : 0x80c93090 - 0x80d46274   ( 717 kB)",
"[    0.000000] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=4, Nodes=1",
"[    0.000000] ftrace: allocating 25471 entries in 75 pages",
"[    0.000000] Hierarchical RCU implementation.",
"[    0.000000] NR_IRQS: 16, nr_irqs: 16, preallocated irqs: 16",
"[    0.000000] arch_timer: cp15 timer(s) running at 19.20MHz (phys).",
"[    0.000000] clocksource: arch_sys_counter: mask: 0xffffffffffffff max_cycles: 0x46d987e47, max_idle_ns: 440795202767 ns",
"[    0.000007] sched_clock: 56 bits at 19MHz, resolution 52ns, wraps every 4398046511078ns",
"[    0.000022] Switching to timer-based delay loop, resolution 52ns",
"[    0.000271] Console: colour dummy device 80x30",
"[    0.000827] console [tty1] enabled",
"[    0.000863] Calibrating delay loop (skipped), value calculated using timer frequency.. 38.40 BogoMIPS (lpj=192000)",
"[    0.000902] pid_max: default: 32768 minimum: 301",
"[    0.001213] Mount-cache hash table entries: 2048 (order: 1, 8192 bytes)",
"[    0.001245] Mountpoint-cache hash table entries: 2048 (order: 1, 8192 bytes)",
"[    0.002217] Disabling memory control group subsystem",
"[    0.002341] CPU: Testing write buffer coherency: ok",
"[    0.002774] CPU0: thread -1, cpu 0, socket 0, mpidr 80000000",
"[    0.003177] Setting up static identity map for 0x100000 - 0x10003c",
"[    0.003314] Hierarchical SRCU implementation.",
"[    0.004037] smp: Bringing up secondary CPUs ...",
"[    0.004764] CPU1: thread -1, cpu 1, socket 0, mpidr 80000001",
"[    0.005533] CPU2: thread -1, cpu 2, socket 0, mpidr 80000002",
"[    0.006287] CPU3: thread -1, cpu 3, socket 0, mpidr 80000003",
"[    0.006393] smp: Brought up 1 node, 4 CPUs",
"[    0.006462] SMP: Total of 4 processors activated (153.60 BogoMIPS).",
"[    0.006483] CPU: All CPU(s) started in HYP mode.",
"[    0.006500] CPU: Virtualization extensions available.",
"[    0.007351] devtmpfs: initialized",
"[    0.017937] VFP support v0.3: implementor 41 architecture 3 part 40 variant 3 rev 4",
"[    0.018192] clocksource: jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 19112604462750000 ns",
"[    0.018234] futex hash table entries: 1024 (order: 4, 65536 bytes)",
"[    0.018840] pinctrl core: initialized pinctrl subsystem",
"[    0.019620] NET: Registered protocol family 16",
"[    0.022296] DMA: preallocated 1024 KiB pool for atomic coherent allocations",
"[    0.027128] hw-breakpoint: found 5 (+1 reserved) breakpoint and 4 watchpoint registers.",
"[    0.027160] hw-breakpoint: maximum watchpoint size is 8 bytes.",
"[    0.027378] Serial: AMBA PL011 UART driver",
"[    0.029093] bcm2835-mbox 3f00b880.mailbox: mailbox enabled",
"[    0.029593] uart-pl011 3f201000.serial: could not find pctldev for node /soc/gpio@7e200000/uart0_pins, deferring probe",
"[    0.061320] bcm2835-dma 3f007000.dma: DMA legacy API manager at bb813000, dmachans=0x1",
"[    0.062798] SCSI subsystem initialized",
"[    0.063041] usbcore: registered new interface driver usbfs",
"[    0.063110] usbcore: registered new interface driver hub",
"[    0.063211] usbcore: registered new device driver usb",
"[    0.070066] bpxboot-firmware soc:firmware: Attached to firmware from 2018-03-16 16:17",
"[    0.071420] clocksource: Switched to clocksource arch_sys_counter",
"[    0.141860] VFS: Disk quotas dquot_6.6.0",
"[    0.141969] VFS: Dquot-cache hash table entries: 1024 (order 0, 4096 bytes)",
"[    0.142158] FS-Cache: Loaded",
"[    0.142369] CacheFiles: Loaded",
"[    0.151328] NET: Registered protocol family 2",
"[    0.152139] TCP established hash table entries: 8192 (order: 3, 32768 bytes)",
"[    0.152268] TCP bind hash table entries: 8192 (order: 4, 65536 bytes)",
"[    0.152470] TCP: Hash tables configured (established 8192 bind 8192)",
"[    0.152619] UDP hash table entries: 512 (order: 2, 16384 bytes)",
"[    0.152680] UDP-Lite hash table entries: 512 (order: 2, 16384 bytes)",
"[    0.152922] NET: Registered protocol family 1",
"[    0.153448] RPC: Registered named UNIX socket transport module.",
"[    0.153471] RPC: Registered udp transport module.",
"[    0.153490] RPC: Registered tcp transport module.",
"[    0.153509] RPC: Registered tcp NFSv4.1 backchannel transport module.",
"[    0.154706] hw perfevents: enabled with GPCv7_cortex_a7 PMU driver, 7 counters available",
"[    0.157433] workingset: timestamp_bits=14 max_order=18 bucket_order=4",
"[    0.165699] FS-Cache: Netfs 'nfs' registered for caching",
"[    0.166313] NFS: Registering the id_resolver key type",
"[    0.166363] Key type id_resolver registered",
"[    0.166383] Key type id_legacy registered",
"[    0.171459] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 251)",
"[    0.171626] io scheduler noop registered",
"[    0.171648] io scheduler deadline registered",
"[    0.171954] io scheduler cfq registered (default)",
"[    0.171976] io scheduler mq-deadline registered",
"[    0.171996] io scheduler kyber registered",
"[    0.174343] BCM2708FB: allocated DMA memory fad00000",
"[    0.174387] BCM2708FB: allocated DMA channel 0 @ bb813000",
"[    0.224641] Console: switching to colour frame buffer device 228x61",
"[    0.255500] bcm2835-rng 3f104000.rng: hwrng registered",
"[    0.255783] vc-mem: phys_addr:0x00000000 mem_base=0x3ec00000 mem_size:0x40000000(1024 MiB)",
"[    0.256479] vc-sm: Videocore shared memory driver",
"[    0.256898] gpiomem-bcm2835 3f200000.gpiomem: Initialised: Registers at 0x3f200000",
"[    0.266954] brd: module loaded",
"[    0.276261] loop: module loaded",
"[    0.276398] Loading iSCSI transport class v2.0-870.",
"[    0.277239] libphy: Fixed MDIO Bus: probed",
"[    0.277469] usbcore: registered new interface driver lan78xx",
"[    0.277685] usbcore: registered new interface driver smsc95xx",
"[    0.277866] dwc_otg: version 3.00a 10-AUG-2012 (platform bus)",
"[    0.506164] Core Release: 2.80a",
"[    0.506273] Setting default values for core params",
"[    0.506447] Finished setting default values for core params",
"[    0.706857] Using Buffer DMA mode",
"[    0.706965] Periodic Transfer Interrupt Enhancement - disabled",
"[    0.707135] Multiprocessor Interrupt Enhancement - disabled",
"[    0.707298] OTG VER PARAM: 0, OTG VER FLAG: 0",
"[    0.707435] Dedicated Tx FIFOs mode",
"[    0.707964] WARN::dwc_otg_hcd_init:1046: FIQ DMA bounce buffers: virt = 0xbad14000 dma = 0xfad14000 len=9024",
"[    0.708261] FIQ FSM acceleration enabled for :",
"               Non-periodic Split Transactions",
"               Periodic Split Transactions",
"               High-Speed Isochronous Endpoints",
"               Interrupt/Control Split Transaction hack enabled",
"[    0.708865] dwc_otg: Microframe scheduler enabled",
"[    0.708973] WARN::hcd_init_fiq:459: FIQ on core 1 at 0x805e8c78",
"[    0.715758] WARN::hcd_init_fiq:460: FIQ ASM at 0x805e8fcc length 36",
"[    0.722584] WARN::hcd_init_fiq:486: MPHI regs_base at 0xbb87e000",
"[    0.729432] dwc_otg 3f980000.usb: DWC OTG Controller",
"[    0.736210] dwc_otg 3f980000.usb: new USB bus registered, assigned bus number 1",
"[    0.743065] dwc_otg 3f980000.usb: irq 62, io mem 0x00000000",
"[    0.749793] Init: Port Power? op_state=1",
"[    0.756500] Init: Power Port (0)",
"[    0.763300] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002",
"[    0.769986] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1",
"[    0.776737] usb usb1: Product: DWC OTG Controller",
"[    0.783417] usb usb1: Manufacturer: BPX 2.4.0-center dwc_otg_hcd",
"[    0.790279] usb usb1: SerialNumber: 3f980000.usb",
"[    0.797695] hub 1-0:1.0: USB hub found",
"[    0.804501] hub 1-0:1.0: 1 port detected",
"[    0.811719] dwc_otg: FIQ enabled",
"[    0.811724] dwc_otg: NAK holdoff enabled",
"[    0.811729] dwc_otg: FIQ split-transaction FSM enabled",
"[    0.811738] Module dwc_common_port init",
"[    0.812020] usbcore: registered new interface driver usb-storage",
"[    0.818816] mousedev: PS/2 mouse device common for all mice",
"[    0.825559] IR NEC protocol handler initialized",
"[    0.832144] IR RC5(x/sz) protocol handler initialized",
"[    0.838794] IR RC6 protocol handler initialized",
"[    0.845477] IR JVC protocol handler initialized",
"[    0.851978] IR Sony protocol handler initialized",
"[    0.858445] IR SANYO protocol handler initialized",
"[    0.864869] IR Sharp protocol handler initialized",
"[    0.871330] IR MCE Keyboard/mouse protocol handler initialized",
"[    0.877866] IR XMP protocol handler initialized",
"[    0.885089] bcm2835-wdt 3f100000.watchdog: Broadcom BCM2835 watchdog timer",
"[    0.892068] bcm2835-cpufreq: min=600000 max=1400000",
"[    0.899093] sdhci: Secure Digital Host Controller Interface driver",
"[    0.904219] sdhci: Copyright(c) Pierre Ossman",
"[    0.907391] mmc-bcm2835 3f300000.mmc: could not get clk, deferring probe",
"[    0.910546] sdhost-bcm2835 3f202000.mmc: could not get clk, deferring probe",
"[    0.913599] sdhci-pltfm: SDHCI platform and OF driver helper",
"[    0.917588] ledtrig-cpu: registered to indicate activity on CPUs",
"[    0.920621] hidraw: raw HID events driver (C) Jiri Kosina",
"[    0.923675] usbcore: registered new interface driver usbhid",
"[    0.926646] usbhid: USB HID core driver",
"[    0.929890] vchiq: vchiq_init_state: slot_zero = bad80000, is_master = 0",
"[    0.933801] [vc_sm_connected_init]: start",
"[    0.941335] [vc_sm_connected_init]: end - returning 0",
"[    0.944683] Initializing XFRM netlink socket",
"[    0.947585] NET: Registered protocol family 17",
"[    0.950603] Key type dns_resolver registered",
"[    0.953793] Registering SWP/SWPB emulation handler",
"[    0.957039] registered taskstats version 1",
"[    0.960415] Key type encrypted registered",
"[    0.966222] uart-pl011 3f201000.serial: cts_event_workaround enabled",
"[    0.969288] 3f201000.serial: ttyAMA0 at MMIO 0x3f201000 (irq = 87, base_baud = 0) is a PL011 rev2",
"[    0.973348] mmc-bcm2835 3f300000.mmc: mmc_debug:0 mmc_debug2:0",
"[    0.976417] mmc-bcm2835 3f300000.mmc: DMA channel allocated",
"[    1.021528] Indeed it is in host mode hprt0 = 00021501",
"[    1.088605] sdhost: log_buf @ bad13000 (fad13000)",
"[    1.118174] random: fast init done",
"[    1.130329] mmc1: queuing unknown CIS tuple 0x80 (2 bytes)",
"[    1.134756] mmc1: queuing unknown CIS tuple 0x80 (3 bytes)",
"[    1.139183] mmc1: queuing unknown CIS tuple 0x80 (3 bytes)",
"[    1.144882] mmc1: queuing unknown CIS tuple 0x80 (7 bytes)",
"[    1.171452] mmc0: sdhost-bcm2835 loaded - DMA enabled (>1)",
"[    1.179013] of_cfs_init",
"[    1.185538] of_cfs_init: OK",
"[    1.189348] Waiting for root device /dev/mmcblk0p2...",
"[    1.231458] usb 1-1: new high-speed USB device number 2 using dwc_otg",
"[    1.237995] Indeed it is in host mode hprt0 = 00001101",
"[    1.311445] mmc1: new high speed SDIO card at address 0001",
"[    1.371532] mmc0: host does not support reading read-only switch, assuming write-enable",
"[    1.381841] mmc0: new high speed SDHC card at address aaaa",
"[    1.389117] mmcblk0: mmc0:aaaa SC32G 29.7 GiB",
"[    1.399895]  mmcblk0: p1 p2",
"[    1.425291] EXT4-fs (mmcblk0p2): mounted filesystem without journal. Opts: noload",
"[    1.431985] VFS: Mounted root (ext4 filesystem) readonly on device 179:2.",
"[    1.441532] devtmpfs: mounted",
"[    1.445925] Freeing unused kernel memory: 1024K",
"[    1.481764] usb 1-1: New USB device found, idVendor=0424, idProduct=2514",
"[    1.488521] usb 1-1: New USB device strings: Mfr=0, Product=0, SerialNumber=0",
"[    1.496004] hub 1-1:1.0: USB hub found",
"[    1.502858] hub 1-1:1.0: 4 ports detected",
"[    1.821476] usb 1-1.1: new high-speed USB device number 3 using dwc_otg",
"[    1.940414] systemd[1]: System time before build time, advancing clock.",
"[    1.951778] usb 1-1.1: New USB device found, idVendor=0424, idProduct=2514",
"[    1.958956] usb 1-1.1: New USB device strings: Mfr=0, Product=0, SerialNumber=0",
"[    1.966750] hub 1-1.1:1.0: USB hub found",
"[    1.973395] hub 1-1.1:1.0: 3 ports detected",
"[    2.100106] NET: Registered protocol family 10",
"[    2.108463] Segment Routing with IPv6",
"[    2.121241] ip_tables: (C) 2000-2006 Netfilter Core Team",
"[    2.150641] systemd[1]: systemd 239 running in system mode. (+PAM +AUDIT +SEBPX +IMA +APPGPCOR +SMACK +SYSVINIT +UTMP +LIBCRYPTSETUP +GCRYPT +GNUTLS +ACL +XZ +LZ4 +SECCOMP +BLKID +ELFUTILS +KMOD -IDN2 +IDN -PCRE2 default-hierarchy=hybrid)",
"[    2.166282] systemd[1]: Detected architecture GPC.",
"[    2.203527] systemd[1]: Set hostname to <wisper>.",
"[    2.291507] usb 1-1.1.2: new low-speed USB device number 4 using dwc_otg",
"[    2.451095] usb 1-1.1.2: New USB device found, idVendor=1c4f, idProduct=0110",
"[    2.458580] usb 1-1.1.2: New USB device strings: Mfr=1, Product=2, SerialNumber=0",
"[    2.465924] usb 1-1.1.2: Product: 038-H90AUSW000:H90AUS:V5510",
"[    2.473305] usb 1-1.1.2: Manufacturer: Android USB Keyboard",
"[    2.495379] input: Android USB Keyboard 038-H90AUSW000:H90AUS:V5510 as /devices/platform/soc/3f980000.usb/usb1/1-1/1-1.1/1-1.1.2/1-1.1.2:1.0/0003:1C4F:0110.0001/input/input0",
"[    2.572152] hid-generic 0003:1C4F:0110.0001: input,hidraw0: USB HID v1.10 Keyboard [Android USB Keyboard 038-H90AUSW000:H90AUS:V5510] on usb-3f980000.usb-1.1.2/input0",
"[    2.604401] input: Android USB Keyboard 038-H90AUSW000:H90AUS:V5510 as /devices/platform/soc/3f980000.usb/usb1/1-1/1-1.1/1-1.1.2/1-1.1.2:1.1/0003:1C4F:0110.0002/input/input1",
"[    2.682828] hid-generic 0003:1C4F:0110.0002: input,hidraw1: USB HID v1.10 Mouse [Android USB Keyboard 038-H90AUSW000:H90AUS:V5510] on usb-3f980000.usb-1.1.2/input1",
"[    2.991504] usb 1-1.1.1: new high-speed USB device number 5 using dwc_otg",
"[    3.117187] random: systemd: uninitialized urandom read (16 bytes read)",
"[    3.122069] usb 1-1.1.1: New USB device found, idVendor=0424, idProduct=7800",
"[    3.122078] usb 1-1.1.1: New USB device strings: Mfr=0, Product=0, SerialNumber=0",
"[    3.143926] systemd[1]: Started Forward Password Requests to Wall Directory Watch.",
"[    3.162558] random: systemd: uninitialized urandom read (16 bytes read)",
"[    3.171384] systemd[1]: Reached target Swap.",
"[    3.190305] random: systemd: uninitialized urandom read (16 bytes read)",
"[    3.199899] systemd[1]: Set up automount Arbitrary Executable File Formats File System Automount Point.",
"[    3.220410] systemd[1]: Listening on udev Control Socket.",
"[    3.241587] systemd[1]: Created slice User and Session Slice.",
"[    3.262574] systemd[1]: Listening on Journal Socket.",
"[    3.287798] systemd[1]: Starting Create list of required static device nodes for the current kernel...",
"[    3.404618] libphy: lan78xx-mdiobus: probed",
"[    3.837674] EXT4-fs (mmcblk0p2): warning: mounting unchecked fs, running e2fsck is recommended",
"[    3.857857] EXT4-fs (mmcblk0p2): re-mounted. Opts: (null)",
"[    3.988233] systemd-journald[135]: Received request to flush runtime journal from PID 1",
"[    4.031773] systemd-journald[135]: File /var/log/journal/563ba3a27e6b427aa3102555880c577c/system.journal corrupted or uncleanly shut down, renaming and replacing.",
"[    4.032727] EXT4-fs error (device mmcblk0p2): ext4_validate_inode_bitmap:99: comm systemd-journal: Corrupt inode bitmap - block_group = 17, inode_bitmap = 524304",
"[    4.045280] EXT4-fs error (device mmcblk0p2): ext4_mb_generate_buddy:756: group 19, block bitmap and bg descriptor inconsistent: 27904 vs 27905 free clusters",
"[    4.046069] EXT4-fs error (device mmcblk0p2): ext4_mb_generate_buddy:756: group 20, block bitmap and bg descriptor inconsistent: 18300 vs 18301 free clusters",
"[    4.047516] EXT4-fs error (device mmcblk0p2): ext4_mb_generate_buddy:756: group 22, block bitmap and bg descriptor inconsistent: 16996 vs 16997 free clusters",
"[    4.048264] EXT4-fs error (device mmcblk0p2): ext4_mb_generate_buddy:756: group 23, block bitmap and bg descriptor inconsistent: 11944 vs 11945 free clusters",
"[    4.049106] EXT4-fs error (device mmcblk0p2): ext4_mb_generate_buddy:756: group 24, block bitmap and bg descriptor inconsistent: 4566 vs 4567 free clusters",
"[    4.057566] EXT4-fs error (device mmcblk0p2): ext4_validate_block_bitmap:389: comm systemd-journal: bg 2: bad block bitmap checksum",
"[    4.061322] EXT4-fs error (device mmcblk0p2): ext4_mb_generate_buddy:756: group 5, block bitmap and bg descriptor inconsistent: 27831 vs 27832 free clusters",
"[    4.069050] EXT4-fs error (device mmcblk0p2): ext4_mb_generate_buddy:756: group 26, block bitmap and bg descriptor inconsistent: 14612 vs 14613 free clusters",
"[    4.069774] EXT4-fs error (device mmcblk0p2): ext4_mb_generate_buddy:756: group 27, block bitmap and bg descriptor inconsistent: 8314 vs 8315 free clusters",
"[    4.151595] Under-voltage detected! (0x00050005)",
"[    5.401871] brcmfmac: F1 signature read @0x18000000=0x15264345",
"[    5.412390] brcmfmac: brcmf_fw_map_chip_to_name: using brcm/brcmfmac43455-sdio.bin for chip 0x004345(17221) rev 0x000006",
"[    5.421380] usbcore: registered new interface driver brcmfmac",
"[    5.640682] random: crng init done",
"[    5.648715] random: 7 urandom warning(s) missed due to ratelimiting",
"[    5.721828] brcmfmac: brcmf_c_preinit_dcmds: Firmware version = wl0: Mar  1 2015 07:29:38 version 7.45.18 (r538002) FWID 01-6a2c8ad4",
"[    5.722810] brcmfmac: brcmf_c_preinit_dcmds: CLM version = API: 12.2 Data: 9.10.105 Compiler: 1.29.4 ClmImport: 1.36.3 Creation: 2018-03-09 18:56:28 ",
"[    6.736831] brcmfmac: power management disabled",
"[    6.930685] brcmfmac: brcmf_cfg80211_reg_notifier: not an ISO3166 code (0x43 0x4e)",
"[    7.584213] uart-pl011 3f201000.serial: no DMA platform data",
"[    7.684510] Bluetooth: Core ver 2.22",
"[    7.696892] NET: Registered protocol family 31",
"[    7.696902] Bluetooth: HCI device and connection manager initialized",
"[    7.696929] Bluetooth: HCI socket layer initialized",
"[    7.696944] Bluetooth: L2CAP socket layer initialized",
"[    7.696984] Bluetooth: SCO socket layer initialized",
"[    7.733691] Bluetooth: HCI UART driver ver 2.3",
"[    7.733698] Bluetooth: HCI UART protocol H4 registered",
"[    7.733702] Bluetooth: HCI UART protocol Three-wire (H5) registered",
"[    8.783074] IPv6: ADDRCONF(NETDEV_UP): eth0: link is not ready",
"[    8.793152] IPv6: ADDRCONF(NETDEV_UP): eth0: link is not ready",
"[   10.092317] brcmfmac: brcmf_cfg80211_reg_notifier: not an ISO3166 code (0x43 0x4e)",
"[   12.471526] Voltage normalised (0x00000000)",
"[   17.624239] EXT4-fs error: 9 callbacks suppressed",
"[   17.624247] EXT4-fs error (device mmcblk0p2): ext4_validate_inode_bitmap:99: comm xkbcomp: Corrupt inode bitmap - block_group = 9, inode_bitmap = 519",
"[   43.671516] Under-voltage detected! (0x00050005)",
"[   47.831499] Voltage normalised (0x00000000)",
"[   49.911520] Under-voltage detected! (0x00050005)",
"[   54.071624] Voltage normalised (0x00000000)",
"[   83.680687] usb 1-1.3: new low-speed USB device number 6 using dwc_otg",
"[   83.824206] usb 1-1.3: New USB device found, idVendor=09da, idProduct=c10a",
"[   83.824230] usb 1-1.3: New USB device strings: Mfr=1, Product=2, SerialNumber=0",
"[   83.824243] usb 1-1.3: Product: USB Mouse",
"[   83.824256] usb 1-1.3: Manufacturer: A4Tech",
"[   83.837583] input: A4Tech USB Mouse as /devices/platform/soc/3f980000.usb/usb1/1-1/1-1.3/1-1.3:1.0/0003:09DA:C10A.0003/input/input2",
"[   83.838434] hid-generic 0003:09DA:C10A.0003: input,hiddev96,hidraw2: USB HID v1.10 Mouse [A4Tech USB Mouse] on usb-3f980000.usb-1.3/input0",
"[  305.123183] EXT4-fs (mmcblk0p2): error count since last fsck: 1849",
"[  305.123221] EXT4-fs (mmcblk0p2): initial error at time 1540788795: mb_free_blocks:1468: inode 6765: block 1407491",
"[  305.123253] EXT4-fs (mmcblk0p2): last error at time 1554895754: ext4_validate_inode_bitmap:99: inode 145819",
"[  572.091128] usb 1-1.3: USB disconnect, device number 6",
"[  751.334408] usb 1-1.3: new low-speed USB device number 7 using dwc_otg",
"[  751.479213] usb 1-1.3: New USB device found, idVendor=09da, idProduct=c10a",
"[  751.479238] usb 1-1.3: New USB device strings: Mfr=1, Product=2, SerialNumber=0",
"[  751.479251] usb 1-1.3: Product: USB Mouse",
"[  751.479264] usb 1-1.3: Manufacturer: A4Tech",
"[  751.492599] input: A4Tech USB Mouse as /devices/platform/soc/3f980000.usb/usb1/1-1/1-1.3/1-1.3:1.0/0003:09DA:C10A.0004/input/input3",
"[  751.493436] hid-generic 0003:09DA:C10A.0004: input,hiddev96,hidraw2: USB HID v1.10 Mouse [A4Tech USB Mouse] on usb-3f980000.usb-1.3/input0"]

