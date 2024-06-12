"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[4776],{2755:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=n(5893),s=n(1151);n(769);const i={title:"Ray Serve High Availability",sidebar_position:6},r=void 0,l={id:"gen-ai/inference/rayserve-ha",title:"Ray Serve High Availability",description:"Note: Mistral-7B-Instruct-v0.2 is a gated model in Huggingface repository. In order to use this model, one needs to use a HuggingFace Token.",source:"@site/docs/gen-ai/inference/rayserve-ha.md",sourceDirName:"gen-ai/inference",slug:"/gen-ai/inference/rayserve-ha",permalink:"/data-on-eks/docs/gen-ai/inference/rayserve-ha",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/gen-ai/inference/rayserve-ha.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Ray Serve High Availability",sidebar_position:6},sidebar:"genai",previous:{title:"NVIDIA Triton Server with vLLM",permalink:"/data-on-eks/docs/gen-ai/inference/vLLM-NVIDIATritonServer-Llama2"},next:{title:"Training on EKS",permalink:"/data-on-eks/docs/category/training-on-eks"}},d={},o=[{value:"Ray Head Node High Availability With Elastic Cache for Redis",id:"ray-head-node-high-availability-with-elastic-cache-for-redis",level:2},{value:"Add an External Redis Server",id:"add-an-external-redis-server",level:3},{value:"Add External Redis Information to RayService",id:"add-external-redis-information-to-rayservice",level:3},{value:"Simulate Ray Head Pod Crash",id:"simulate-ray-head-pod-crash",level:3},{value:"Test the Mistral AI Gradio App",id:"test-the-mistral-ai-gradio-app",level:4},{value:"Cleanup",id:"cleanup",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.admonition,{type:"danger",children:(0,t.jsxs)(a.p,{children:["Note: Mistral-7B-Instruct-v0.2 is a gated model in ",(0,t.jsx)(a.a,{href:"https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.2",children:"Huggingface"})," repository. In order to use this model, one needs to use a HuggingFace Token.\nTo generate a token in HuggingFace, log in using your HuggingFace account and click on ",(0,t.jsx)(a.code,{children:"Access Tokens"})," menu item on the ",(0,t.jsx)(a.a,{href:"https://huggingface.co/settings/tokens",children:"Settings"})," page."]})}),"\n",(0,t.jsx)(a.h2,{id:"ray-head-node-high-availability-with-elastic-cache-for-redis",children:"Ray Head Node High Availability With Elastic Cache for Redis"}),"\n",(0,t.jsx)(a.p,{children:"A critical component of a Ray cluster is the head node, which orchestrates the entire cluster by managing task scheduling, state synchronization, and node coordination. However, by default, the Ray head Pod represents a single point of failure; if it fails, the entire cluster including the Ray worker Pods need to be restarted."}),"\n",(0,t.jsx)(a.p,{children:"To address this, High Availability (HA) for the Ray head node is essential. Global Control Service (GCS) manages cluster-level metadata in a RayCluster. By default, the GCS lacks fault tolerance as it stores all data in-memory, and a failure can cause the entire Ray cluster to fail. To avoid this, one must add fault tolerance to Ray\u2019s Global Control Store (GCS), which allows the Ray Serve application to serve traffic even when the head node crashes. In the event of a GCS restart, it retrieves all the data from the Redis instance and resumes its regular functions."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Ray-head-worker-redis",src:n(2227).Z+"",width:"1024",height:"576"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Ray-head-ha",src:n(6652).Z+"",width:"1024",height:"576"})}),"\n",(0,t.jsxs)(a.p,{children:["Following sections provide the steps on how to enable GCS fault tolerance and ensure high availability for the Ray head Pod. We're using the ",(0,t.jsx)(a.code,{children:"Mistral-7B-Instruct-v0.2"})," model to demonstrate the Ray head high availability."]}),"\n",(0,t.jsx)(a.h3,{id:"add-an-external-redis-server",children:"Add an External Redis Server"}),"\n",(0,t.jsx)(a.p,{children:"GCS fault tolerance requires an external Redis database. You can choose to host your own Redis database, or you can use one through a third-party vendor."}),"\n",(0,t.jsxs)(a.p,{children:["For development and testing purposes, you can also host a containerized Redis database on the same EKS cluster as your Ray cluster. However, for production setups, it's recommended to use a highly available external Redis cluster. In this pattern, we've used ",(0,t.jsx)(a.a,{href:"https://aws.amazon.com/elasticache/redis/",children:"Amazon ElasticCache for Redis"})," to create an external Redis cluster. You can also choose to use ",(0,t.jsx)(a.a,{href:"https://aws.amazon.com/memorydb/",children:"Amazon memoryDB"})," for setting up a Redis cluster."]}),"\n",(0,t.jsxs)(a.p,{children:["As part of the current blueprint, we've added a terraform module named ",(0,t.jsx)(a.code,{children:"elasticache"})," that creates an Elastic Cache Redis cluster in AWS. This uses The Redis cluster has cluster mode disabled and contain one node. This cluster node's endpoint can be used for both reads and writes."]}),"\n",(0,t.jsx)(a.p,{children:"Key things to note in this module are -"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"The Redis Cluster is in the same VPC as the EKS cluster. If the Redis cluster is created in a separate VPC, then VPC peering needs to be set up between the EKS cluster VPC and the Elastic Cache Redis cluster VPC to enable network connectivity."}),"\n",(0,t.jsx)(a.li,{children:"A cache subnet group needs to be created at the time of creating the Redis cluster. A subnet group is a collection of subnets that you may want to designate for your caches in a VPC. ElastiCache uses that cache subnet group to assign IP addresses within that subnet to each cache node in the cache. The blueprint automatically adds all the subnets used by the EKS cluster in the subnet group for the Elastic cache Redis cluster."}),"\n",(0,t.jsx)(a.li,{children:"Security Group - The Security Group assigned to the Redis cache needs to have an inbound rule that allows TCP traffic from EKS Cluster's worker node security group to the Redis cluster security group over port 6379. This is because the Ray head Pod needs to establish a connection to the Elastic cache Redis cluster over port 6379. The blueprint automatically sets up the security group with the inbound rule."}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"To create the Redis cluster using Amazon Elastic Cache, please follow the below steps."}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsx)(a.p,{children:"This Mistral7b deployment is using Ray Serve with High availability. If you have already deployed mistral7b in the previous steps, then you can delete the deployment and run the below steps."})}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Prerequisites"}),":"]}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://pypi.org/project/envsubst/",children:"envsubst"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://jqlang.github.io/jq/download/",children:"jq"})}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["First, enable the creation of the Redis cluster by setting the ",(0,t.jsx)(a.code,{children:"enable_rayserve_ha_elastic_cache_redis"})," variable to ",(0,t.jsx)(a.code,{children:"true"})," by running the below command. By default it's set to ",(0,t.jsx)(a.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"export TF_VAR_enable_rayserve_ha_elastic_cache_redis=true\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Then, run the ",(0,t.jsx)(a.code,{children:"install.sh"})," script to install the EKS cluster with KubeRay operator and other add-ons."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd ai-ml/trainimum-inferentia\n./install.sh\n"})}),"\n",(0,t.jsx)(a.p,{children:"In addition to the EKS cluster, this blueprint creates an AWS Elastic Cache Redis Cluster. Sample output looks like below"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-text",children:'Apply complete! Resources: 8 added, 1 changed, 0 destroyed.\n\nOutputs:\n\nconfigure_kubectl = "aws eks --region us-west-2 update-kubeconfig --name trainium-inferentia"\nelastic_cache_redis_cluster_arn = "arn:aws:elasticache:us-west-2:11111111111:cluster:trainium-inferentia"\n'})}),"\n",(0,t.jsx)(a.h3,{id:"add-external-redis-information-to-rayservice",children:"Add External Redis Information to RayService"}),"\n",(0,t.jsxs)(a.p,{children:["Once the elastic cache Redis cluster is created, we need to modify the ",(0,t.jsx)(a.code,{children:"RayService"})," configuration for ",(0,t.jsx)(a.code,{children:"mistral-7b"})," model inference."]}),"\n",(0,t.jsx)(a.p,{children:"First we need to obtain the Elastic Cache Redis Cluster endpoint by using AWS CLI and jq like below."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"export EXT_REDIS_ENDPOINT=$(aws elasticache describe-cache-clusters \\\n    --cache-cluster-id \"trainium-inferentia\" \\\n    --show-cache-node-info | jq -r '.CacheClusters[0].CacheNodes[0].Endpoint.Address')\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Now, add the annotation ",(0,t.jsx)(a.code,{children:'ray.io/ft-enabled: "true"'})," under ",(0,t.jsx)(a.code,{children:"RayService"})," CRD. The annotation ",(0,t.jsx)(a.code,{children:"ray.io/ft-enabled"})," enables GCS fault tolerance when set to ",(0,t.jsx)(a.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",children:'apiVersion: ray.io/v1\nkind: RayService\nmetadata:\n  name: mistral\n  namespace: mistral\n  annotations:\n    ray.io/ft-enabled: "true"\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Add the external Redis cluster information in the ",(0,t.jsx)(a.code,{children:"headGroupSpec"})," as ",(0,t.jsx)(a.code,{children:"RAY_REDIS_ADDRESS"})," environment variable."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",children:"headGroupSpec:\n  headService:\n    metadata:\n      name: mistral\n      namespace: mistral\n  rayStartParams:\n    dashboard-host: '0.0.0.0'\n    num-cpus: \"0\"\n  template:\n    spec:\n      containers:\n      - name: head\n        ....\n        env:\n          - name: RAY_REDIS_ADDRESS\n            value: $EXT_REDIS_ENDPOINT:6379\n"})}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"RAY_REDIS_ADDRESS"}),"\u2019s value should be your Redis database\u2019s address. It should contain the Redis cluster endpoint and the port."]}),"\n",(0,t.jsxs)(a.p,{children:["You can find the full ",(0,t.jsx)(a.code,{children:"RayService"})," configuration with GCS fault tolerance enabled in ",(0,t.jsx)(a.code,{children:"gen-ai/inference/mistral-7b-rayserve-inf2/ray-service-mistral-ft.yaml"})," file."]}),"\n",(0,t.jsxs)(a.p,{children:["With the above ",(0,t.jsx)(a.code,{children:"RayService"})," configuration, we have enabled GCS fault tolerance for the Ray head Pod and the Ray cluster can recover from head Pod crashes without restarting all the Ray workers."]}),"\n",(0,t.jsxs)(a.p,{children:["Let's apply the above ",(0,t.jsx)(a.code,{children:"RayService"})," configuration and check the behavior."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd ../../gen-ai/inference/\nenvsubst < mistral-7b-rayserve-inf2/ray-service-mistral-ft.yaml| kubectl apply -f -\n"})}),"\n",(0,t.jsx)(a.p,{children:"The output should look like below"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-text",children:"namespace/mistral created\nsecret/hf-token created\nrayservice.ray.io/mistral created\ningress.networking.k8s.io/mistral created\n"})}),"\n",(0,t.jsx)(a.p,{children:"Check the status of the Ray Pods in the cluster."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"kubectl get po -n mistral\n"})}),"\n",(0,t.jsxs)(a.p,{children:["The Ray head and worker Pods should be in ",(0,t.jsx)(a.code,{children:"Running"})," state as below."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-text",children:"NAME                                         READY   STATUS    RESTARTS   AGE\nmistral-raycluster-rf6l9-head-hc8ch          2/2     Running   0          31m\nmistral-raycluster-rf6l9-worker-inf2-tdrs6   1/1     Running   0          31m\n"})}),"\n",(0,t.jsx)(a.h3,{id:"simulate-ray-head-pod-crash",children:"Simulate Ray Head Pod Crash"}),"\n",(0,t.jsx)(a.p,{children:"Simulate Ray head Pod crashing by deleting the Pod"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'kubectl -n mistral delete po mistral-raycluster-rf6l9-head-xxxxx\npod "mistral-raycluster-rf6l9-head-xxxxx" deleted\n'})}),"\n",(0,t.jsx)(a.p,{children:"We can see that the Ray worker Pod is still running when the Ray head Pod is terminated and auto-restarted. Please see the below screenshots from Lens IDE."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Head Pod Deletion",src:n(2997).Z+"",width:"2478",height:"1150"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Worker Pod Uninterrupted",src:n(179).Z+"",width:"2478",height:"1150"})}),"\n",(0,t.jsx)(a.h4,{id:"test-the-mistral-ai-gradio-app",children:"Test the Mistral AI Gradio App"}),"\n",(0,t.jsx)(a.p,{children:"Let's also test our Gradio UI App to see whether it's able to answer questions while the Ray head Pod is deleted."}),"\n",(0,t.jsx)(a.p,{children:"Open the Gradio Mistral AI Chat application by pointing your browser to localhost:7860."}),"\n",(0,t.jsx)(a.p,{children:"Now repeat the Ray head Pod crash simulation by deleting the Ray head Pod as shown in the above steps."}),"\n",(0,t.jsx)(a.p,{children:"While the Ray head Pod is terminated and is recovering, submit questions into the Mistral AI Chat interface. We can see from below screenshots that the chat application is indeed able to serve traffic while the Ray head Pod is deleted and is recovering. This is because the RayServe service points to the Ray worker Pod which in this case is never restarted because of the GCS fault tolerance."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Gradio App Test HA",src:n(7148).Z+"",width:"2774",height:"1092"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Gradio App Test 1",src:n(8108).Z+"",width:"1239",height:"575"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"Gradio App Test Contd",src:n(6493).Z+"",width:"1239",height:"575"})}),"\n",(0,t.jsxs)(a.p,{children:["For a complete guide on enabling end-to-end fault tolerance to your RayServe application, please refer to ",(0,t.jsx)(a.a,{href:"https://docs.ray.io/en/latest/serve/production-guide/fault-tolerance.html#add-end-to-end-fault-tolerance",children:"Ray Guide"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,t.jsx)(a.p,{children:"Finally, we'll provide instructions for cleaning up and deprovisioning the resources when they are no longer needed."}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Step1:"})," Delete Gradio App and mistral Inference deployment"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd gen-ai/inference/mistral-7b-rayserve-inf2\nkubectl delete -f gradio-ui.yaml\nkubectl delete -f ray-service-mistral-ft.yaml\n"})}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Step2:"})," Cleanup the EKS Cluster\nThis script will cleanup the environment using ",(0,t.jsx)(a.code,{children:"-target"})," option to ensure all the resources are deleted in correct order."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd ../../../ai-ml/trainium-inferentia/\n./cleanup.sh\n"})})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},769:(e,a,n)=>{n.d(a,{Z:()=>g});var t=n(7294),s=n(5697),i=n.n(s),r=n(512);const l="collapsibleContent_q3kw",d="header_QCEw",o="icon_PckA",c="content_qLC1",h="expanded_iGsi";var u=n(5893);function p(e){let{children:a,header:n}=e;const[s,i]=(0,t.useState)(!1);return(0,u.jsxs)("div",{className:l,children:[(0,u.jsxs)("div",{className:(0,r.Z)(d,{[h]:s}),onClick:()=>{i(!s)},children:[n,(0,u.jsx)("span",{className:(0,r.Z)(o,{[h]:s}),children:s?"\ud83d\udc47":"\ud83d\udc48"})]}),s&&(0,u.jsx)("div",{className:c,children:a})]})}p.propTypes={children:i().node.isRequired,header:i().node.isRequired};const g=p},6493:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/answer-1-contd-b71287c36f7260ebeb1d443182897fbf.png"},8108:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/answer-1-2af058a004a133f49f75bd6f6222fb33.png"},7148:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/gradio-test-ft-88de30e8e8c943602f929d8537f8de62.png"},2997:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/head-pod-deleted-396351f6561e39dd035baa07b62687a5.png"},2227:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/ray-head-ha-1-f3550b77b8a0495910286cb48193a352.png"},6652:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/ray-head-ha-2-2fb1a8c21b6b7456c8797e47f626aa7a.png"},179:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/worker-pod-running-89d7529dc8edef9956c1847bf0f0488d.png"},1151:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>r});var t=n(7294);const s={},i=t.createContext(s);function r(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);