"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[2152],{9966:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=r(4848),t=r(8453),s=r(2450);const o={sidebar_position:5,sidebar_label:"Trainium on EKS"},a="AWS Trainium on EKS",l={id:"blueprints/ai-ml/trainium",title:"AWS Trainium on EKS",description:"AWS Trainium is an advanced ML accelerator that transforms high-performance deep learning(DL) training. Trn1 instances, powered by AWS Trainium chips, are purpose-built for high-performance DL training of 100B+ parameter models. Meticulously designed for exceptional performance, Trn1 instances cater specifically to training popular Natual Language Processing(NLP) models on AWS, offering up to  50% cost savings  compared to GPU-based EC2 instances. This cost efficiency makes them an attractive option for data scientists and ML practitioners seeking optimized training costs without compromising performance.",source:"@site/docs/blueprints/ai-ml/trainium.md",sourceDirName:"blueprints/ai-ml",slug:"/blueprints/ai-ml/trainium",permalink:"/data-on-eks/docs/blueprints/ai-ml/trainium",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/ai-ml/trainium.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Trainium on EKS"},sidebar:"blueprints",previous:{title:"EMR NVIDIA Spark-RAPIDS",permalink:"/data-on-eks/docs/blueprints/ai-ml/emr-spark-rapids"},next:{title:"Job Schedulers on EKS",permalink:"/data-on-eks/docs/category/job-schedulers-on-eks"}},c={},d=[{value:"Trianium Device Architecture",id:"trianium-device-architecture",level:4},{value:"AWS Neuron Drivers",id:"aws-neuron-drivers",level:4},{value:"AWS Neuron Runtime",id:"aws-neuron-runtime",level:4},{value:"AWS Neuron Device Plugin for Kubernetes",id:"aws-neuron-device-plugin-for-kubernetes",level:4},{value:"FSx for Lustre",id:"fsx-for-lustre",level:4},{value:"TorchX",id:"torchx",level:4},{value:"Volcano Scheduler",id:"volcano-scheduler",level:4},{value:"Solution Architecture",id:"solution-architecture",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Verify the resources",id:"verify-the-resources",level:3},{value:"Distributed PyTorch Training on Trainium with TorchX and EKS",id:"distributed-pytorch-training-on-trainium-with-torchx-and-eks",level:3},{value:"Step1: Create a Docker image  for PyTorch Neuron container for BERT-large model pre-training",id:"step1-create-a-docker-image--for-pytorch-neuron-container-for-bert-large-model-pre-training",level:4},{value:"Step2: Copy WikiCorpus pre-training dataset for BERT model to FSx for Lustre filesystem",id:"step2-copy-wikicorpus-pre-training-dataset-for-bert-model-to-fsx-for-lustre-filesystem",level:4},{value:"Step3: Precompile the BERT graphs using neuron_parallel_compile",id:"step3-precompile-the-bert-graphs-using-neuron_parallel_compile",level:4},{value:"Step4: Launch BERT pretraining job using 64 Neuron cores with two trn1.32xlarge instances",id:"step4-launch-bert-pretraining-job-using-64-neuron-cores-with-two-trn132xlarge-instances",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"aws-trainium-on-eks",children:"AWS Trainium on EKS"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://aws.amazon.com/machine-learning/trainium/",children:"AWS Trainium"})," is an advanced ML accelerator that transforms high-performance deep learning(DL) training. ",(0,i.jsx)(n.code,{children:"Trn1"})," instances, powered by AWS Trainium chips, are purpose-built for high-performance DL training of ",(0,i.jsx)(n.strong,{children:"100B+ parameter"})," models. Meticulously designed for exceptional performance, Trn1 instances cater specifically to training popular Natual Language Processing(NLP) models on AWS, offering up to  **50% cost savings ** compared to GPU-based EC2 instances. This cost efficiency makes them an attractive option for data scientists and ML practitioners seeking optimized training costs without compromising performance."]}),"\n",(0,i.jsxs)(n.p,{children:["At the core of Trn1 instance's capabilities lies the ",(0,i.jsx)(n.a,{href:"https://awsdocs-neuron.readthedocs-hosted.com/en/latest/",children:"AWS Neuron SDK"}),", a software development kit seamlessly integrated with leading ML frameworks and libraries, such as ",(0,i.jsx)(n.a,{href:"https://pytorch.org/",children:"PyTorch"}),", ",(0,i.jsx)(n.a,{href:"https://tensorflow.org/",children:"TensorFlow"}),", ",(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/accelerate/usage_guides/megatron_lm",children:"Megatron-LM"}),", and ",(0,i.jsx)(n.a,{href:"https://huggingface.co/",children:"Hugging Face"}),". The Neuron SDK empowers developers to train NLP, computer vision, and recommender models on Trainium with ease, requiring only a few lines of code changes."]}),"\n",(0,i.jsxs)(n.p,{children:["In this blueprint, we will learn how to securely deploy an ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/clusters.html",children:"Amazon EKS Cluster"})," with Trainium Node groups (",(0,i.jsx)(n.code,{children:"Trn1.32xlarge"})," and ",(0,i.jsx)(n.code,{children:"Trn1n.32xlarge"}),") and all the required plugins(EFA Package for EC2, Neuron Device K8s Plugin and EFA K8s plugin). Once the deployment is complete, we will learn how to train a BERT-large(Bidirectional Encoder Representations from Transformers) model  with Distributed PyTorch pre-training using the WikiCorpus dataset. For scheduling the distributed training job, we will utilize ",(0,i.jsx)(n.a,{href:"https://pytorch.org/torchx/latest/",children:"TorchX"})," with the ",(0,i.jsx)(n.a,{href:"https://volcano.sh/en/",children:"Volcano Scheduler"}),". Additionally, we can monitor the neuron activity during training using ",(0,i.jsx)(n.code,{children:"neuron-top"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"trianium-device-architecture",children:"Trianium Device Architecture"}),"\n",(0,i.jsxs)(n.p,{children:["Each Trainium device (chip) comprises two neuron cores. In the case of ",(0,i.jsx)(n.code,{children:"Trn1.32xlarge"})," instances, ",(0,i.jsx)(n.code,{children:"16 Trainium devices"})," are combined, resulting in a total of ",(0,i.jsx)(n.code,{children:"32 Neuron cores"}),". The diagram below provides a visual representation of the Neuron device's architecture:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Trainium Device",src:r(2646).A+"",width:"625",height:"556"})}),"\n",(0,i.jsx)(n.h4,{id:"aws-neuron-drivers",children:"AWS Neuron Drivers"}),"\n",(0,i.jsx)(n.p,{children:"Neuron Drivers are a set of essential software components installed on the host operating system of AWS Inferentia-based accelerators, such as Trainium/Inferentia instances. Their primary function is to optimize the interaction between the accelerator hardware and the underlying operating system, ensuring seamless communication and efficient utilization of the accelerator's computational capabilities."}),"\n",(0,i.jsx)(n.h4,{id:"aws-neuron-runtime",children:"AWS Neuron Runtime"}),"\n",(0,i.jsx)(n.p,{children:"Neuron runtime consists of kernel driver and C/C++ libraries which provides APIs to access Inferentia and Trainium Neuron devices. The Neuron ML frameworks plugins for TensorFlow, PyTorch and Apache MXNet use the Neuron runtime to load and run models on the NeuronCores."}),"\n",(0,i.jsx)(n.h4,{id:"aws-neuron-device-plugin-for-kubernetes",children:"AWS Neuron Device Plugin for Kubernetes"}),"\n",(0,i.jsxs)(n.p,{children:["The AWS Neuron Device Plugin for Kubernetes is a component that promotes Trainium/Inferentia devices as system hardware resources within the EKS cluster. It is deployed as a ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",children:"DaemonSet"}),", ensuring proper permissions for the device plugin to update the Node and Pod annotations, thereby seamlessly integrating Inferentia devices with Kubernetes pods."]}),"\n",(0,i.jsx)(n.h4,{id:"fsx-for-lustre",children:"FSx for Lustre"}),"\n",(0,i.jsx)(n.p,{children:"In this blueprint, we utilize TorchX to initiate a DataParallel BERT phase1 pretraining task, employing 64 workers distributed across 2 trn1.32xlarge (or trn1n.32xlarge) instances, with 32 workers per instance. The BERT phase1 pretraining process involves a substantial 50+ GB WikiCorpus dataset as the training data. To handle large datasets efficiently, including the dataset inside the training container image or downloading it at the start of each job is not practical. Instead, we leverage shared file system storage to ensure multiple compute instances can process the training datasets concurrently."}),"\n",(0,i.jsx)(n.p,{children:"For this purpose, FSx for Lustre emerges as an ideal solution for machine learning workloads. It provides shared file system storage that can process massive data sets at up to hundreds of gigabytes per second of throughput, millions of IOPS, and sub-millisecond latencies. We can dynamically create FSx for Lustre and attach the file system to the Pods using the FSx CSI controller through Persistent Volume Claims(PVC), enabling seamless integration of shared file storage with the distributed training process."}),"\n",(0,i.jsx)(n.h4,{id:"torchx",children:"TorchX"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://pytorch.org/torchx/main/quickstart.html",children:"TorchX"})," SDK or CLI provides the functionality to effortlessly submit PyTorch jobs to Kubernetes. It offers the capability to connect predefined components like hyperparameter optimization, model serving, and distributed data-parallel into sophisticated pipelines, while leveraging popular job schedulers like Slurm, Ray, AWS Batch, Kubeflow Pipelines, and Airflow."]}),"\n",(0,i.jsxs)(n.p,{children:["The TorchX Kubernetes scheduler relies on the ",(0,i.jsx)(n.a,{href:"https://volcano.sh/en/docs/",children:"Volcano Scheduler"}),", which must be installed on the Kubernetes cluster. Gang scheduling is essential for multi-replica/multi-role execution, and currently, Volcano is the only supported scheduler within Kubernetes that meets this requirement."]}),"\n",(0,i.jsx)(n.p,{children:"TorchX can seamlessly integrate with Airflow and Kubeflow Pipelines. In this blueprint, we will install the TorchX CLI on a local machine/cloud9 ide and use it to trigger job submission on the EKS cluster, which, in turn, submits jobs to the Volcano scheduler queue running on the EKS Cluster."}),"\n",(0,i.jsx)(n.h4,{id:"volcano-scheduler",children:"Volcano Scheduler"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://volcano.sh/en/docs/",children:"Volcano Scheduler"})," is a custom Kubernetes batch scheduler designed to efficiently manage diverse workloads, making it particularly well-suited for resource-intensive tasks like machine learning. Volcano Queue serves as a collection of PodGroups, adopting a FIFO (First-In-First-Out) approach and forming the basis for resource allocation. VolcanoJob, also known as ",(0,i.jsx)(n.code,{children:"vcjob"}),", is a Custom Resource Definition (CRD) object specifically tailored for Volcano. It stands out from a regular Kubernetes job by offering advanced features, including a specified scheduler, minimum member requirements, task definitions, lifecycle management, specific queue assignment, and priority settings. VolcanoJob is ideally suited for high-performance computing scenarios, such as machine learning, big data applications, and scientific computing."]}),"\n",(0,i.jsx)(n.h3,{id:"solution-architecture",children:"Solution Architecture"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Alt text",src:r(6362).A+"",width:"12492",height:"7950"})}),"\n",(0,i.jsxs)(s.A,{header:(0,i.jsx)(n.h2,{children:(0,i.jsx)(n.span,{children:"Deploying the Solution"})}),children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Before deploying this blueprint, it is important to be cognizant of the costs associated with the utilization of AWS Trainium Instances. The blueprint sets up two ",(0,i.jsx)(n.code,{children:"Trn1.32xlarge"})," instances for pre-training the dataset. Be sure to assess and plan for these costs accordingly."]})}),(0,i.jsxs)(n.p,{children:["In this ",(0,i.jsx)(n.a,{href:"https://github.com/awslabs/data-on-eks/tree/main/ai-ml/trainium",children:"example"}),", you will provision the following resources."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create a new sample VPC, including 2 Private Subnets and 2 Public Subnets."}),"\n",(0,i.jsx)(n.li,{children:"Set up an Internet gateway for the Public Subnets and a NAT Gateway for the Private Subnets."}),"\n",(0,i.jsxs)(n.li,{children:["Deploy the EKS Cluster Control plane with a public endpoint (for demo purposes only) and a core managed node group. Also, set up two additional node groups: ",(0,i.jsx)(n.code,{children:"trn1-32xl-ng1"})," with 2 instances and ",(0,i.jsx)(n.code,{children:"trn1n-32xl-ng"})," with 0 instances."]}),"\n",(0,i.jsx)(n.li,{children:"Install the EFA package during the bootstrap setup for the trn1-32xl-ng1 node group, and configure 8 Elastic Network Interfaces (ENIs) with EFA on each instance."}),"\n",(0,i.jsx)(n.li,{children:"Use the EKS GPU AMI for the Trainium node groups, which includes Neuron drivers and runtime."}),"\n",(0,i.jsx)(n.li,{children:"Deploy essential add-ons such as Metrics server, Cluster Autoscaler, Karpenter, Grafana, AMP, and Prometheus server."}),"\n",(0,i.jsx)(n.li,{children:"Enable FSx for Lustre CSI driver to allow for Dynamic Persistent Volume Claim (PVC) creation for shared filesystems."}),"\n",(0,i.jsx)(n.li,{children:"Set up the Volcano Scheduler for PyTorch job submission, allowing for efficient task scheduling on Kubernetes."}),"\n",(0,i.jsx)(n.li,{children:"Prepare the necessary etcd setup as a prerequisite for TorchX."}),"\n",(0,i.jsx)(n.li,{children:"Create a test queue within Volcano to enable TorchX job submission to this specific queue."}),"\n"]}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important"}),": In this setup, Karpenter is utilized exclusively for ",(0,i.jsx)(n.code,{children:"inferentia-inf2"})," instances, due to its current limitations in custom networking interfaces configuration. For Trainium instances, managed node groups and the Cluster Autoscaler are employed for scaling purposes. For users working with an older version of Karpenter (specifically, the ",(0,i.jsx)(n.code,{children:"v1alpha5"})," APIs), please note that the configuration for Trainium with ",(0,i.jsx)(n.code,{children:"LaunchTemplates"})," is still accessible. It can be found in the ",(0,i.jsx)(n.code,{children:"data-on-eks/ai-ml/trainium-inferentia/addons.tf"})," file, although it is commented out at the file's end."]})}),(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),(0,i.jsx)(n.p,{children:"Ensure that you have installed the following tools on your machine."}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n"]}),(0,i.jsx)(n.h3,{id:"deploy",children:"Deploy"}),(0,i.jsx)(n.p,{children:"Clone the repository"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),(0,i.jsxs)(n.p,{children:["Navigate into one of the example directories and run ",(0,i.jsx)(n.code,{children:"install.sh"})," script"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export TF_VAR_enable_fsx_for_lustre=true\nexport TF_VAR_enable_torchx_etcd=true\nexport TF_VAR_enable_volcano=true\n\ncd data-on-eks/ai-ml/trainium-inferentia/ && chmod +x install.sh\n./install.sh\n"})}),(0,i.jsx)(n.h3,{id:"verify-the-resources",children:"Verify the resources"}),(0,i.jsx)(n.p,{children:"Verify the Amazon EKS Cluster"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"aws eks describe-cluster --name trainium-inferentia\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Creates k8s config file to authenticate with EKS\naws eks --region us-west-2 update-kubeconfig --name trainium-inferentia\n\nkubectl get nodes # Output shows the EKS Managed Node group nodes\n\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"distributed-pytorch-training-on-trainium-with-torchx-and-eks",children:"Distributed PyTorch Training on Trainium with TorchX and EKS"}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we will perform DataParallel-based phase1 pretraining on the BERT-large model using the WikiCorpus dataset. To execute the task, we will use TorchX to initiate the job on two ",(0,i.jsx)(n.code,{children:"trn1.32xlarge"})," instances, with 32 workers per instance. You can also run the same job on ",(0,i.jsx)(n.code,{children:"trn1n.32xlarge"})," node group."]}),"\n",(0,i.jsx)(n.p,{children:"We have created three Shell scripts to automate the job execution as much as possible."}),"\n",(0,i.jsx)(n.h4,{id:"step1-create-a-docker-image--for-pytorch-neuron-container-for-bert-large-model-pre-training",children:"Step1: Create a Docker image  for PyTorch Neuron container for BERT-large model pre-training"}),"\n",(0,i.jsx)(n.p,{children:"This step creates a new Docker image and push this image to ECR repo. The Dockerfile handles the installation of necessary software packages, such as AWS Neuron repos, Python dependencies, and other essential tools for PyTorch and BERT pre-training. It configures various environment variables to ensure smooth execution and optimal performance. The image contains crucial components like a BERT pretraining script and requirements.txt file sourced from GitHub, both vital for the BERT pretraining process. Furthermore, it includes a basic environment test script for validation purposes. Together, this Docker image provides a comprehensive environment for efficient BERT pre-training with PyTorch while incorporating AWS Neuron optimizations."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"This step generates an AMD64 (x86-64) Docker image with a size of 7GB or more. Therefore, it is strongly advised to utilize an AWS Cloud9/EC2 AMD64 (x86-64) instance with Docker client installed, ensuring sufficient storage capacity for this process."})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"If you are executing this script on a Cloud9 IDE/EC2 instance different from the one where the EKS Cluster is deployed, it is essential to ensure that the same IAM role is used or attached to the Cloud9 IDE/EC2 instance. Should you prefer a distinct IAM role for Cloud9 IDE/EC2, it must be added to the EKS Cluster's aws-auth config map to grant the role authorization for authenticating with the EKS Cluster. Taking these precautions will enable smooth communication between the instances and the EKS Cluster, ensuring the script functions as intended."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ai-ml/trainium-inferentia/examples/dp-bert-large-pretrain\nchmod +x 1-bert-pretrain-build-image.sh\n./1-bert-pretrain-build-image.sh\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Admin:~/environment/data-on-eks/ai-ml/trainium-inferentia/examples/dp-bert-large-pretrain (trainium-part2) $ ./1-bert-pretrain-build-image.sh\nDid you install docker on AMD64(x86-64) machine (y/n): y\nEnter the ECR region: us-west-2\nECR repository 'eks_torchx_test' already exists.\nRepository URL: <YOUR_ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/eks_torchx_test\nBuilding and Tagging Docker image... <YOUR_ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/eks_torchx_test:bert_pretrain\n[+] Building 2.4s (26/26) FINISHED\n => [internal] load build definition from Dockerfile.bert_pretrain                                                                                                                   0.0s\n => => transferring dockerfile: 5.15kB                                                                                                                                               0.0s\n => [internal] load .dockerignore                                                                                                                                                    0.0s\n => => transferring context: 2B                                                                                                                                                      0.0s\n => [internal] load metadata for docker.io/library/ubuntu:20.04                                                                                                                      0.7s\n => [ 1/22] FROM docker.io/library/ubuntu:20.04@sha256:c9820a44b950956a790c354700c1166a7ec648bc0d215fa438d3a339812f1d01                                                              0.0s\n ...\nbert_pretrain: digest: sha256:1bacd5233d1a87ca1d88273c5a7cb131073c6f390f03198a91dc563158485941 size: 4729\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Login to AWS Console and verify the ECR repo(",(0,i.jsx)(n.code,{children:"<YOUR_ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/eks_torchx_test"}),") and the image tag(",(0,i.jsx)(n.code,{children:"bert_pretrain"}),") in ECR."]}),"\n",(0,i.jsx)(n.h4,{id:"step2-copy-wikicorpus-pre-training-dataset-for-bert-model-to-fsx-for-lustre-filesystem",children:"Step2: Copy WikiCorpus pre-training dataset for BERT model to FSx for Lustre filesystem"}),"\n",(0,i.jsxs)(n.p,{children:["In this step, we make it easy to transfer the WikiCorpus pre-training dataset, which is crucial for training the BERT model in distributed mode by multiple Trainium instances, to the FSx for Lustre filesystem. To achieve this, we will login to ",(0,i.jsx)(n.code,{children:"cmd-shell"})," pod which includes an AWS CLI container, providing access to the filesystem."]}),"\n",(0,i.jsxs)(n.p,{children:["Once you're inside the container, Copy the WikiCorpus dataset from S3 bucket (",(0,i.jsx)(n.code,{children:"s3://neuron-s3/training_datasets/bert_pretrain_wikicorpus_tokenized_hdf5/bert_pretrain_wikicorpus_tokenized_hdf5_seqlen128.tar"}),"). The dataset is then unpacked, giving you access to its contents, ready for use in the subsequent BERT model pre-training process."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'kubectl exec -i -t -n default cmd-shell -c app -- sh -c "clear; (bash || ash || sh)"\n\n# Once logged into the container\nyum install tar\ncd /data\naws s3 cp s3://neuron-s3/training_datasets/bert_pretrain_wikicorpus_tokenized_hdf5/bert_pretrain_wikicorpus_tokenized_hdf5_seqlen128.tar . --no-sign-request\nchmod 744 bert_pretrain_wikicorpus_tokenized_hdf5_seqlen128.tar\ntar xvf bert_pretrain_wikicorpus_tokenized_hdf5_seqlen128.tar\n'})}),"\n",(0,i.jsx)(n.h4,{id:"step3-precompile-the-bert-graphs-using-neuron_parallel_compile",children:"Step3: Precompile the BERT graphs using neuron_parallel_compile"}),"\n",(0,i.jsxs)(n.p,{children:["PyTorch Neuron introduces a valuable tool known as ",(0,i.jsx)(n.a,{href:"https://awsdocs-neuron.readthedocs-hosted.com/en/latest/frameworks/torch/torch-neuronx/api-reference-guide/training/pytorch-neuron-parallel-compile.html",children:"neuron_parallel_compile"}),", which significantly reduces graph compilation time by extracting model graphs and compiling them in parallel. This optimization technique expedites the process and results in faster model compilation. The compiled graphs are then stored on the Fsx for Lustre shared storage volume, accessible by worker nodes during model training. This efficient approach streamlines the training process and improves overall performance, making the most of PyTorch Neuron's capabilities."]}),"\n",(0,i.jsxs)(n.p,{children:["Execute the following commands.This script prompts the user to configure their kubeconfig and verifies the presence of the ",(0,i.jsx)(n.code,{children:"lib"})," folder with ",(0,i.jsx)(n.code,{children:"trn1_dist_ddp.py"}),". It sets up Docker credentials, installs the ",(0,i.jsx)(n.strong,{children:"TorchX"})," client for Kubernetes. Using TorchX, the script runs a Kubernetes job to compile BERT graphs with optimized performance. Additionally, TorchX creates another Docker image and pushes it to the ECR repository within the same repo. This image is utilized in the subsequent pre-compiling pods, optimizing the overall BERT model training process."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ai-ml/trainium-inferentia/examples/dp-bert-large-pretrain\nchmod +x 2-bert-pretrain-precompile.sh\n./2-bert-pretrain-precompile.sh\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can verify the pods status by running ",(0,i.jsx)(n.code,{children:"kubectl get pods"})," or ",(0,i.jsx)(n.code,{children:"kubectl get vcjob"}),". Successful output looks like below."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Alt text",src:r(8348).A+"",width:"2152",height:"1360"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also verify the logs for the Pod once they are ",(0,i.jsx)(n.code,{children:"Succeeded"}),". The precompilation job will run for ",(0,i.jsx)(n.code,{children:"~15 minutes"}),". Once complete, you will see the following in the output:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"2023-07-29 09:42:42.000310: INFO ||PARALLEL_COMPILE||: Starting parallel compilations of the extracted graphs2023-07-29 09:42:42.000312: INFO ||PARALLEL_COMPILE||: Compiling /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.406_16969875447143373016.hlo.pb using following command: neuronx-cc compile \u2014target=trn1 \u2014framework XLA /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.406_16969875447143373016.hlo.pb \u2014model-type=transformer \u2014verbose=35 \u2014output /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.406_16969875447143373016.neff\n2023-07-29 09:42:42.000313: INFO ||PARALLEL_COMPILE||: Compiling /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.22250_9219523464496887986.hlo.pb using following command: neuronx-cc compile \u2014target=trn1 \u2014framework XLA /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.22250_9219523464496887986.hlo.pb \u2014model-type=transformer \u2014verbose=35 \u2014output /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.22250_9219523464496887986.neff\n2023-07-29 09:42:42.000314: INFO ||PARALLEL_COMPILE||: Compiling /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.25434_3000743782456078279.hlo.pb using following command: neuronx-cc compile \u2014target=trn1 \u2014framework XLA /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.25434_3000743782456078279.hlo.pb \u2014model-type=transformer \u2014verbose=35 \u2014output /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.25434_3000743782456078279.neff\n2023-07-29 09:42:42.000315: INFO ||PARALLEL_COMPILE||: Compiling /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.25637_13822314547392343350.hlo.pb using following command: neuronx-cc compile \u2014target=trn1 \u2014framework XLA /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.25637_13822314547392343350.hlo.pb \u2014model-type=transformer \u2014verbose=35 \u2014output /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.25637_13822314547392343350.neff\n2023-07-29 09:42:42.000316: INFO ||PARALLEL_COMPILE||: Compiling /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.21907_15179678551789598088.hlo.pb using following command: neuronx-cc compile \u2014target=trn1 \u2014framework XLA /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.21907_15179678551789598088.hlo.pb \u2014model-type=transformer \u2014verbose=35 \u2014output /tmp/parallel_compile_workdir/MODULE_SyncTensorsGraph.21907_15179678551789598088.neff\n.....\nCompiler status PASS\n"})}),"\n",(0,i.jsx)(n.p,{children:"New pre-training cache files are stored under FSx for Lustre."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Alt text",src:r(3484).A+"",width:"1448",height:"286"})}),"\n",(0,i.jsx)(n.h4,{id:"step4-launch-bert-pretraining-job-using-64-neuron-cores-with-two-trn132xlarge-instances",children:"Step4: Launch BERT pretraining job using 64 Neuron cores with two trn1.32xlarge instances"}),"\n",(0,i.jsx)(n.p,{children:"We are now in the final step of training the BERT-large model with WikiCorpus data."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ai-ml/trainium-inferentia/examples/dp-bert-large-pretrain\nchmod +x 3-bert-pretrain.sh\n./3-bert-pretrain.sh\n"})}),"\n",(0,i.jsx)(n.p,{children:"Monitor the job with the following commands. This job may take several hours as its training 30GB+ worth of the data."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get vcjob\nkubectl get pods # Two pods will be running in default namespace\n"})}),"\n",(0,i.jsx)(n.p,{children:"To monitor Neuron usage, you can log in to one of the Trainium EC2 instances using SSM (Systems Manager) from the EC2 console. Once logged in, run the command neuron-ls, and you will receive an output similar to the following."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[root@ip-100-64-229-201 aws-efa-installer]# neuron-ls\ninstance-type: trn1.32xlarge\ninstance-id: i-04b476a6a0e686980\n+--------+--------+--------+---------------+---------+--------+------------------------------------------+---------+\n| NEURON | NEURON | NEURON | CONNECTED | PCI | PID | COMMAND | RUNTIME |\n| DEVICE | CORES | MEMORY | DEVICES | BDF | | | VERSION |\n+--------+--------+--------+---------------+---------+--------+------------------------------------------+---------+\n| 0 | 2 | 32 GB | 12, 3, 4, 1 | 10:1c.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 1 | 2 | 32 GB | 13, 0, 5, 2 | 10:1d.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 2 | 2 | 32 GB | 14, 1, 6, 3 | a0:1c.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 3 | 2 | 32 GB | 15, 2, 7, 0 | a0:1d.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 4 | 2 | 32 GB | 0, 7, 8, 5 | 20:1b.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 5 | 2 | 32 GB | 1, 4, 9, 6 | 20:1c.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 6 | 2 | 32 GB | 2, 5, 10, 7 | 90:1b.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 7 | 2 | 32 GB | 3, 6, 11, 4 | 90:1c.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 8 | 2 | 32 GB | 4, 11, 12, 9 | 20:1d.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 9 | 2 | 32 GB | 5, 8, 13, 10 | 20:1e.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 10 | 2 | 32 GB | 6, 9, 14, 11 | 90:1d.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 11 | 2 | 32 GB | 7, 10, 15, 8 | 90:1e.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 12 | 2 | 32 GB | 8, 15, 0, 13 | 10:1e.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 13 | 2 | 32 GB | 9, 12, 1, 14 | 10:1b.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 14 | 2 | 32 GB | 10, 13, 2, 15 | a0:1e.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n| 15 | 2 | 32 GB | 11, 14, 3, 12 | a0:1b.0 | 109459 | python3 -m torch_neuronx.distributed.... | 2.15.11 |\n+--------+--------+--------+---------------+---------+--------+------------------------------------------+---------+\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also run ",(0,i.jsx)(n.code,{children:"neuron-top"})," which provides the live usage of neuron cores. The below shows the usage of all 32 neuron cores."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Alt text",src:r(5611).A+"",width:"2116",height:"1204"})}),"\n",(0,i.jsx)(n.p,{children:"If you wish to terminate the job, you can execute the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get vcjob # Get a job name\nkubectl delete <ENTER_JOB_NAME>\n"})}),"\n",(0,i.jsxs)(s.A,{header:(0,i.jsx)(n.h2,{children:(0,i.jsx)(n.span,{children:"Cleanup"})}),children:[(0,i.jsxs)(n.p,{children:["This script will cleanup the environment using ",(0,i.jsx)(n.code,{children:"-target"})," option to ensure all the resources are deleted in correct order."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/ai-ml/trainium/ && chmod +x cleanup.sh\n./cleanup.sh\n"})})]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2450:(e,n,r)=>{r.d(n,{A:()=>m});var i=r(6540),t=r(5556),s=r.n(t),o=r(4164);const a="collapsibleContent_q3kw",l="header_QCEw",c="icon_PckA",d="content_qLC1",h="expanded_iGsi";var u=r(4848);function p(e){let{children:n,header:r}=e;const[t,s]=(0,i.useState)(!1);return(0,u.jsxs)("div",{className:a,children:[(0,u.jsxs)("div",{className:(0,o.A)(l,{[h]:t}),onClick:()=>{s(!t)},children:[r,(0,u.jsx)("span",{className:(0,o.A)(c,{[h]:t}),children:t?"\ud83d\udc47":"\ud83d\udc48"})]}),t&&(0,u.jsx)("div",{className:d,children:n})]})}p.propTypes={children:s().node.isRequired,header:s().node.isRequired};const m=p},3484:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/cache-c20ffd2f2f08427c018edbd418f745af.png"},2646:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/neuron-device-b6418f956d103a5da9e7087ba07cf949.png"},5611:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/neuron-top-15b215db91829995ded8d938dc8b3ef8.png"},8348:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/pre-compile-pod-status-a957a723dd43219aacf123b09c9337ec.png"},6362:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/trainium-on-eks-arch-7d551d7182d87be5c787267ec74ff22d.png"},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(6540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);