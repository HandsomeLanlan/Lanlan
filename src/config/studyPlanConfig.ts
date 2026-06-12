import type { StudyPlanConfig } from "../types/studyPlan";

export const studyPlanConfig: StudyPlanConfig = {
	categories: [
		{
			id: "embedded-basics",
			name: "嵌入式基础",
			items: [
				{
					title: "GPIO 输入输出编程",
					description: "掌握STM32的GPIO配置，包括推挽输出、开漏输出、上下拉输入等模式",
					status: "planned",
					tags: ["STM32", "HAL"],
				},
				{
					title: "中断与NVIC控制器",
					description: "学习外部中断EXTI和嵌套向量中断控制器NVIC的工作原理与配置",
					status: "planned",
					tags: ["STM32", "中断"],
				},
				{
					title: "定时器PWM输出",
					description: "学习通用定时器产生PWM信号用于电机控制、LED调光等",
					status: "planned",
					tags: ["STM32", "PWM", "定时器"],
				},
				{
					title: "ADC模数转换",
					description: "学习ADC的工作原理、采样率配置、DMA传输",
					status: "planned",
					tags: ["STM32", "ADC", "DMA"],
				},
				{
					title: "串口通信 UART/USART",
					description: "学习串口通信协议，实现数据收发、printf重定向",
					status: "planned",
					tags: ["通信协议", "UART"],
				},
			],
		},
		{
			id: "communication",
			name: "通信协议",
			items: [
				{
					title: "I2C 总线通信",
					description: "学习I2C协议原理，主从设备通信，读写EEPROM等外设",
					status: "planned",
					tags: ["I2C", "通信协议"],
				},
				{
					title: "SPI 总线通信",
					description: "学习SPI协议原理，全双工通信，驱动Flash/显示屏",
					status: "planned",
					tags: ["SPI", "通信协议"],
				},
				{
					title: "CAN 总线通信",
					description: "学习CAN2.0协议，掌握CAN收发器配置与报文收发",
					status: "planned",
					tags: ["CAN", "汽车电子"],
				},
				{
					title: "Modbus 协议",
					description: "学习Modbus RTU/TCP协议，实现主站与从站通信",
					status: "planned",
					tags: ["Modbus", "工业协议"],
				},
			],
		},
		{
			id: "rtos",
			name: "RTOS 实时系统",
			items: [
				{
					title: "FreeRTOS 任务管理",
					description: "学习FreeRTOS任务的创建、删除、挂起与恢复，理解任务状态转换",
					status: "planned",
					tags: ["FreeRTOS", "RTOS"],
				},
				{
					title: "FreeRTOS 消息队列",
					description: "学习队列的创建与使用，实现任务间通信",
					status: "planned",
					tags: ["FreeRTOS", "任务通信"],
				},
				{
					title: "FreeRTOS 信号量",
					description: "学习二值信号量、计数信号量、互斥量的使用场景与实现",
					status: "planned",
					tags: ["FreeRTOS", "同步"],
				},
				{
					title: "RT-Thread 入门",
					description: "学习国产RTOS RT-Thread的架构、组件化和设备驱动框架",
					status: "planned",
					tags: ["RT-Thread", "RTOS"],
				},
			],
		},
		{
			id: "hardware",
			name: "硬件设计",
			items: [
				{
					title: "原理图设计基础",
					description: "学习原理图符号、网络标签、电源和地的基本设计规范",
					status: "planned",
					tags: ["硬件", "原理图"],
				},
				{
					title: "PCB 布局布线",
					description: "学习PCB设计规则、布局策略、走线技巧与EMC设计",
					status: "planned",
					tags: ["PCB", "EMC"],
				},
			],
		},
		{
			id: "projects",
			name: "项目实战",
			items: [
				{
					title: "智能温湿度监测系统",
					description: "基于STM32+DHT11+OLED实现温湿度采集与显示，通过蓝牙上传手机APP",
					status: "planned",
					tags: ["STM32", "传感器", "蓝牙"],
				},
				{
					title: "四轴无人机飞控",
					description: "基于STM32F4实现四轴飞行器的姿态解算与PID控制",
					status: "planned",
					tags: ["STM32", "PID", "无人机"],
				},
			],
		},
	],
};
