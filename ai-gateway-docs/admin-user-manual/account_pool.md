---
title: 账号池
description: 介绍 1Panel AI 网关账号池，包括添加上游账号、供应商与协议配置、模型映射与调度字段。
---

## 1 概述

账号池是系统集中管理模型账号的入口。系统在调用大模型能力时，需要依赖各模型服务商提供的账号与凭证（如 DeepSeek、智谱、通义等大语言模型，以及阿里云、腾讯云等向量模型服务）。账号池将这些账号统一收纳到同一页面进行管理，避免账号分散、遗漏或重复配置。通过账号池，管理员可以集中查看所有已接入的模型账号，并完成账号的新增、编辑与删除等维护操作，为后续的并发控制、健康监测等能力提供统一的账号基础。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/account_pool/image1_account_pool_list.png" alt="账号池列表"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 1  账号池列表</div>

在账号池页面，你可以完成新增账号、编辑账号、启用 / 禁用账号、删除账号以及按供应商 / 状态 / 类型等维度筛选查看等操作。

## 2 账号池管理

### 2.1 添加账号

点击页面左上角「**添加账号**」按钮，在弹出的表单中依次完成以下配置：

**步骤1 选择供应商与协议类型**

在 **供应商** 下拉框中选择目标供应商。若供应商提供多种账号类型，还需继续选择按量付费、Coding Plan、Token Plan 等类型。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/account_pool/image2_provider_dropdown.png" alt="供应商下拉"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 2  供应商下拉</div>

在 **协议类型** 处选择账号承载的协议类型，支持三种：

- **文本**：用于文本对话类模型；
- **文生图**：用于图片生成类模型；
- **向量**：用于向量 Embeddings 类模型。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/account_pool/image3_add_account_form.png" alt="添加账号表单"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 3  添加账号表单</div>

**步骤2 填写账号名称、服务地址与 API Key**

完成供应商与协议类型选择后，继续填写以下基础信息：

- **名称**：账号在 1Panel AI 网关中的显示名称；
- **服务地址**：固定端点由系统根据供应商自动提供；自定义端点则需填写有效的 HTTPS / HTTP 地址；
- **API Key**：供应商提供的访问密钥。凭据编辑时留空表示沿用已保存的 API Key。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/account_pool/image4_deepseek_form.png" alt="DeepSeek 账号表单"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 4  DeepSeek 账号表单</div>

**步骤3 选择协议配置**

系统会根据所选**供应商与协议类型**，列出可选的**协议配置**项（如 openai-completions、openai-responses、anthropic-messages 等），请根据上游账号的实际接入方式选择匹配的协议，并核对认证方式是否正确，确保后续可正常建立连接。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/account_pool/image5_custom_provider_form.png" alt="自定义供应商表单"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 5  自定义供应商表单</div>

**步骤4 配置模型映射**

**模型映射** 用于建立客户端请求模型名称与供应商侧上游模型名称之间的对应关系。添加或编辑账号时，在模型映射区域填写：

- **请求模型名称**：客户端实际请求的模型名称；
- **上游模型名称**：调用供应商接口时使用的模型名称。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}} src="/img/account_pool/image6_model_mapping.png" alt="模型映射"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 6  模型映射</div>

一个上游账号至少保留一个模型映射，最多支持 100 个。同一账号内的请求模型名称不能重复。若需要获取供应商侧最新模型列表，可在表单中单击 **发现模型**，系统将供应商返回的模型与当前映射进行比较，方便快速补全。

**步骤5 设置调度参数**

在「调度」区域设置账号的**优先级**与**最大并发**：

- **优先级**：数值越小优先级越高，多个可用账号并存时优先选择。

- **最大并发**：账号可同时处理的最大请求数，用于控制对上游的负载。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}}  src="/img/account_pool/image7_configure_scheduling_parameters.png" alt="调度参数"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 7  调度参数</div>

填写完成后单击 **保存**。保存时，文本和向量账号在创建或关键连接信息变更后会执行最小调用验证；文生图账号保存时不会实际生成图片。

### 2.2 管理账号

在账号池列表的操作列，可对每个账号执行以下操作：

- **编辑**：修改名称、凭据、地址、协议路由、模型映射、验证模型、优先级、最大并发和备注。
- **启用 / 禁用**：通过列表中的开关控制账号是否参与调度。
- **删除**：单击删除并确认后，账号及其模型映射将被移除。若账号正被向量服务等功能引用，则不能直接删除。
- **筛选**：可按供应商、协议类型、具体协议、状态和关键字筛选，并选择显示模型、优先级、最大并发等列。

## 3 账号对接

### 3.1 对接DeepSeek

**步骤1 添加账号**

添加 DeepSeek 账号前，需要先在 [DeepSeek 开放平台](https://platform.deepseek.com/) 创建 API Key。

随后在账号池页面点击「**添加账号**」，完成以下配置：

- **供应商**：选择 `DeepSeek`。选定后，系统会自动确定并展示 DeepSeek 支持的协议，账号自动归属「文本」类型，无需手动选择协议类型。
- **名称**：设置便于识别的名称（如 `DeepSeek`），用于在账号池中区分不同账号。
- **API Key**：填写 DeepSeek 开放平台创建的访问密钥。
- **支持协议**：勾选要开放的协议格式，如 `openai-completions`、`openai-responses`、`anthropic-messages`。
- **模型映射**：将请求模型名对应到 DeepSeek 上游模型名，如 `deepseek-chat → deepseek-v4-pro`。
- **测试模型**：选择一个模型用于保存时验证，如 `deepseek-v4-flash`。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}}  src="/img/account_pool/image8_obtain_deepseek_api_key.png" alt="获取 DeepSeek API Key"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 8  获取 DeepSeek API Key</div>

**步骤2 配置样例**

DeepSeek 账号的配置方式如下图所示。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}}  src="/img/account_pool/image9_DeepSeek_configuration_example.png" alt="DeepSeek 配置样例"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 9  DeepSeek 配置样例</div>

### 3.2 对接腾讯云

**步骤1 添加账号**

添加腾讯云账号前，需先在腾讯云开通相应服务并创建访问密钥。

随后在账号池点击「**添加账号**」，按以下方式配置：

- **供应商**：选择 `腾讯云 TokenHub`。
- **账号类型**：中国区 Token Plan / 全球区 Token Plan / 中国区按量付费 / 全球区按量付费
- **协议类型**：选择账号承载的类型。腾讯云 TokenHub 支持文本 / 文生图 / 向量，此处按需选择，如接入向量模型时选择「向量」。
- **名称**：设置账号显示名称。
- **API Key**：填写腾讯云平台创建的访问密钥。
- **支持协议**：确认账号可用的协议格式，如向量模型对应 `openai-embeddings`。
- **模型映射**：将请求模型名对应到腾讯云上游模型名，如 `kinfra-text-embedding-0-i → kinfra-text-embedding-0-i`。
- **测试模型**：选择一个模型用于保存时验证，如 `kinfra-text-embedding-0.6b`。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}}  src="/img/account_pool/image10_obtain_tencent_cloud_api_key.png" alt="获取腾讯云 API Key"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 10  获取腾讯云 API Key</div>

**步骤2 配置样例**

腾讯云‑文生图模型的配置方式如下图所示。向量模型、文本模型可参照同样的方法完成配置。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}}  src="/img/account_pool/image11_tencent_cloud_text_to_image_model_configuration_example.png" alt="腾讯云 - 文生图模型配置样例"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 11  腾讯云 - 文生图模型配置样例</div>

### 3.3 对接阿里云百炼

**步骤1 添加账号**

添加阿里云百炼账号前，需先在阿里云百炼开通相应服务并创建访问密钥。

随后在账号池点击「**添加账号**」，按以下方式配置：

- **供应商**：选择 `阿里云百炼`。
- **账号类型**： Coding Plan / Token Plan / 按量付费。
- **协议类型**： 文本 / 文生图 / 向量。
- **名称**：设置账号显示名称，如 `阿里云百炼`。
- **API Key**：填写阿里云百炼平台创建的访问密钥。
- **支持协议**：勾选要开放的协议格式，如 `openai-completions`、`openai-responses`、`anthropic-messages`。
- **模型映射**：如 `qwen3.7-plus → qwen3.7-plus`。
- **测试模型**：选择一个模型用于保存时验证，如 `qwen3.7-plus`。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}}  src="/img/account_pool/image12_obtain_aliyun_api_key.png" alt="获取阿里云 API Key"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 12  获取阿里云 API Key</div>

**步骤2 配置样例**

阿里云百炼-文生图模型的配置方式如下图所示。向量模型、文本模型可参照同样的方法完成配置。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}}  src="/img/account_pool/image13_aliyun_text_to_image_model_configuration_example.png" alt="阿里云 - 文生图模型配置样例"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 13 阿里云 - 文生图模型配置样例</div>

### 3.4 对接本地 vLLM

**步骤1 添加账号**

- **供应商**：选择 `VLLM`。
- **协议类型**：文本 / 文生图 / 向量 。
- **名称**：设置账号显示名称，如 `本地-vllm`。
- **服务地址**：填写本地 vLLM 服务的访问地址，如 `http://192.168.20.242:8000/v1`。
- **API Key**：若本地服务未启用鉴权，无 API Key 则输入任意字符即可。
- **支持协议**：勾选要开放的协议格式，如 `openai-completions`、`openai-responses`、`anthropic-messages`。
- **模型映射**：可点击 **发现模型** 拉取本地已加载的模型列表快速补全。
- **测试模型**：选择一个模型用于保存时验证。

**步骤2 配置样例**

本地 vLLM 文本模型配置方式如下图所示。向量模型、文生图模型可参照同样的方法完成配置。

<img style={{display:"block",margin:"16px auto",maxWidth:"100%"}}  src="/img/account_pool/image14_local_vllm_configuration_example.png" alt="本地 vLLM 配置样例"/>

<div style={{textAlign:"center",color:"#8a8f99",fontSize:"13px",margin:"6px 0 20px"}}>图 14 本地 vLLM 配置样例</div>

## 4 注意事项

- **妥善保管密钥**：勿在文档、截图或对话中明文展示 API Key，防止泄露。

- **慎改在用账号**：编辑或禁用正在调度的账号，可能立即影响模型调用。

- **合理设置调度参数**：优先级过低或并发过小，可能导致账号难被选用或请求积压。

- **确保模型映射正确**：映射有误时请求将无法路由到目标模型。

- **留意健康状态**：发现账号异常或成功率下降时，及时检查上游连通性、配额与凭证。

- **删除前谨慎确认**：删除为不可逆操作，确认账号不再被使用后再执行。

- **示例数值仅供参考**：文中账号、密钥、地址及统计数值均为示例。
