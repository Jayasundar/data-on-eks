"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[5905],{7209:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=r(4848),t=r(8453);const o={},i="Troubleshooting",a={id:"blueprints/troubleshooting/troubleshooting",title:"Troubleshooting",description:"You will find troubleshooting info for Data on Amazon EKS(DoEKS) installation issues",source:"@site/docs/blueprints/troubleshooting/troubleshooting.md",sourceDirName:"blueprints/troubleshooting",slug:"/blueprints/troubleshooting/",permalink:"/data-on-eks/docs/blueprints/troubleshooting/",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/troubleshooting/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"blueprints",previous:{title:"ClickHouse",permalink:"/data-on-eks/docs/blueprints/distributed-databases/clickhouse"}},l={},c=[{value:"Error: local-exec provisioner error",id:"error-local-exec-provisioner-error",level:2},{value:"Issue Description:",id:"issue-description",level:3},{value:"Solution",id:"solution",level:3},{value:"Timeouts during Terraform Destroy",id:"timeouts-during-terraform-destroy",level:2},{value:"Issue Description:",id:"issue-description-1",level:3},{value:"Symptoms:",id:"symptoms",level:3},{value:"Solution:",id:"solution-1",level:3},{value:"Error: could not download chart",id:"error-could-not-download-chart",level:2},{value:"Issue Description:",id:"issue-description-2",level:3},{value:"Solution:",id:"solution-2",level:3},{value:"Terraform apply/destroy error to authenticate with EKS Cluster",id:"terraform-applydestroy-error-to-authenticate-with-eks-cluster",level:2},{value:"EMR Containers Virtual Cluster (dhwtlq9yx34duzq5q3akjac00) delete: unexpected state &#39;ARRESTED&#39;",id:"emr-containers-virtual-cluster-dhwtlq9yx34duzq5q3akjac00-delete-unexpected-state-arrested",level:2},{value:"Terminating namespace issue",id:"terminating-namespace-issue",level:2},{value:"KMS Alias AlreadyExistsException",id:"kms-alias-alreadyexistsexception",level:2},{value:"Error: creating CloudWatch Logs Log Group",id:"error-creating-cloudwatch-logs-log-group",level:2},{value:"Karpenter Error - Missing Service Linked Role",id:"karpenter-error---missing-service-linked-role",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"You will find troubleshooting info for Data on Amazon EKS(DoEKS) installation issues"}),"\n",(0,s.jsx)(n.h2,{id:"error-local-exec-provisioner-error",children:"Error: local-exec provisioner error"}),"\n",(0,s.jsx)(n.p,{children:"If you encounter the following error during the execution of the local-exec provisioner:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'Error: local-exec provisioner error \\\nwith module.eks-blueprints.module.emr_on_eks["data_team_b"].null_resource.update_trust_policy,\\\n on .terraform/modules/eks-blueprints/modules/emr-on-eks/main.tf line 105, in resource "null_resource" \\\n "update_trust_policy":\u2502 105: provisioner "local-exec" {\u2502 \u2502 Error running command \'set -e\u2502 \u2502 aws emr-containers update-role-trust-policy \\\n \u2502 --cluster-name emr-on-eks \\\u2502 --namespace emr-data-team-b \\\u2502 --role-name emr-on-eks-emr-eks-data-team-b\n'})}),"\n",(0,s.jsx)(n.h3,{id:"issue-description",children:"Issue Description:"}),"\n",(0,s.jsx)(n.p,{children:"The error message indicates that the emr-containers command is not present in the AWS CLI version being used. This issue has been addressed and fixed in AWS CLI version 2.0.54."}),"\n",(0,s.jsx)(n.h3,{id:"solution",children:"Solution"}),"\n",(0,s.jsx)(n.p,{children:"To resolve the issue, update your AWS CLI version to 2.0.54 or a later version by executing the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"pip install --upgrade awscliv2\n"})}),"\n",(0,s.jsx)(n.p,{children:"By updating the AWS CLI version, you will ensure that the necessary emr-containers command is available and can be executed successfully during the provisioning process."}),"\n",(0,s.jsxs)(n.p,{children:["If you continue to experience any issues or require further assistance, please consult the ",(0,s.jsx)(n.a,{href:"https://github.com/aws/aws-cli/issues/6162",children:"AWS CLI GitHub issue"})," for more details or contact our support team for additional guidance."]}),"\n",(0,s.jsx)(n.h2,{id:"timeouts-during-terraform-destroy",children:"Timeouts during Terraform Destroy"}),"\n",(0,s.jsx)(n.h3,{id:"issue-description-1",children:"Issue Description:"}),"\n",(0,s.jsx)(n.p,{children:"Customers may experience timeouts during the deletion of their environments, specifically when VPCs are being deleted. This is a known issue related to the vpc-cni component."}),"\n",(0,s.jsx)(n.h3,{id:"symptoms",children:"Symptoms:"}),"\n",(0,s.jsx)(n.p,{children:"ENIs (Elastic Network Interfaces) remain attached to subnets even after the environment is destroyed.\nThe EKS managed security group associated with the ENI cannot be deleted by EKS."}),"\n",(0,s.jsx)(n.h3,{id:"solution-1",children:"Solution:"}),"\n",(0,s.jsx)(n.p,{children:"To overcome this issue, follow the recommended solution below:"}),"\n",(0,s.jsxs)(n.p,{children:["Utilize the provided ",(0,s.jsx)(n.code,{children:"cleanup.sh"})," scripts to ensure a proper cleanup of resources. Run the `cleanup.sh`` script, which is included in the blueprint.\nThis script will handle the removal of any lingering ENIs and associated security groups."]}),"\n",(0,s.jsx)(n.h2,{id:"error-could-not-download-chart",children:"Error: could not download chart"}),"\n",(0,s.jsx)(n.p,{children:"If you encounter the following error while attempting to download a chart:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'\u2502 Error: could not download chart: failed to download "oci://public.ecr.aws/karpenter/karpenter" at version "v0.18.1"\n\u2502\n\u2502   with module.eks_blueprints_kubernetes_addons.module.karpenter[0].module.helm_addon.helm_release.addon[0],\n\u2502   on .terraform/modules/eks_blueprints_kubernetes_addons/modules/kubernetes-addons/helm-addon/main.tf line 1, in resource "helm_release" "addon":\n\u2502    1: resource "helm_release" "addon" {\n\u2502\n'})}),"\n",(0,s.jsx)(n.p,{children:"Follow the steps below to resolve the issue:"}),"\n",(0,s.jsx)(n.h3,{id:"issue-description-2",children:"Issue Description:"}),"\n",(0,s.jsx)(n.p,{children:"The error message indicates that there was a failure in downloading the specified chart. This issue can occur due to a bug in Terraform during the installation of Karpenter."}),"\n",(0,s.jsx)(n.h3,{id:"solution-2",children:"Solution:"}),"\n",(0,s.jsx)(n.p,{children:"To resolve the issue, you can try the following steps:"}),"\n",(0,s.jsx)(n.p,{children:"Authenticate with ECR: Run the following command to authenticate with the ECR (Elastic Container Registry) where the chart is located:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws\n"})}),"\n",(0,s.jsx)(n.p,{children:"Re-run terraform apply: Execute the terraform apply command again with the --auto-approve flag to reapply the Terraform configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"terraform apply --auto-approve\n"})}),"\n",(0,s.jsx)(n.p,{children:"By authenticating with ECR and re-running the terraform apply command, you will ensure that the necessary chart can be downloaded successfully during the installation process."}),"\n",(0,s.jsx)(n.h2,{id:"terraform-applydestroy-error-to-authenticate-with-eks-cluster",children:"Terraform apply/destroy error to authenticate with EKS Cluster"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'ERROR:\n\u2577\n\u2502 Error: Get "http://localhost/api/v1/namespaces/kube-system/configmaps/aws-auth": dial tcp [::1]:80: connect: connection refused\n\u2502\n\u2502   with module.eks.kubernetes_config_map_v1_data.aws_auth[0],\n\u2502   on .terraform/modules/eks/main.tf line 550, in resource "kubernetes_config_map_v1_data" "aws_auth":\n\u2502  550: resource "kubernetes_config_map_v1_data" "aws_auth" {\n\u2502\n\u2575\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Solution:"}),"\nIn this situation Terraform is unable to refresh the data resources and authenticate with EKS Cluster.\nSee the discussion ",(0,s.jsx)(n.a,{href:"https://github.com/terraform-aws-modules/terraform-aws-eks/issues/1234",children:"here"})]}),"\n",(0,s.jsx)(n.p,{children:"Try this approach first by using exec plugin."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-terraform",children:'provider "kubernetes" {\n  host                   = module.eks_blueprints.eks_cluster_endpoint\n  cluster_ca_certificate = base64decode(module.eks_blueprints.eks_cluster_certificate_authority_data)\n\n  exec {\n    api_version = "client.authentication.k8s.io/v1beta1"\n    command     = "aws"\n    args = ["eks", "get-token", "--cluster-name", module.eks_blueprints.eks_cluster_id]\n  }\n}\n\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"If the issue still persists even after the above change then you can use alternative approach of using local kube config file.\nNOTE: This approach might not be ideal for production. It helps you to apply/destroy clusters with your local kube config."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a local kubeconfig for your cluster"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"aws eks update-kubeconfig --name <EKS_CLUSTER_NAME> --region <CLUSTER_REGION>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Update the ",(0,s.jsx)(n.code,{children:"providers.tf"})," file with the below config by just using the config_path."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-terraform",children:'provider "kubernetes" {\n    config_path = "<HOME_PATH>/.kube/config"\n}\n\nprovider "helm" {\n    kubernetes {\n        config_path = "<HOME_PATH>/.kube/config"\n    }\n}\n\nprovider "kubectl" {\n    config_path = "<HOME_PATH>/.kube/config"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"emr-containers-virtual-cluster-dhwtlq9yx34duzq5q3akjac00-delete-unexpected-state-arrested",children:"EMR Containers Virtual Cluster (dhwtlq9yx34duzq5q3akjac00) delete: unexpected state 'ARRESTED'"}),"\n",(0,s.jsx)(n.p,{children:"If you encounter an error message stating \"waiting for EMR Containers Virtual Cluster (xwbc22787q6g1wscfawttzzgb) delete: unexpected state 'ARRESTED', wanted target ''. last error: %!s(nil)\", you can follow the steps below to resolve the issue:"}),"\n",(0,s.jsxs)(n.p,{children:["Note: Replace ",(0,s.jsx)(n.code,{children:"<REGION>"})," with the appropriate AWS region where the virtual cluster is located."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open a terminal or command prompt."}),"\n",(0,s.jsx)(n.li,{children:'Run the following command to list the virtual clusters in the "ARRESTED" state:'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"aws emr-containers list-virtual-clusters --region <REGION> --states ARRESTED \\\n--query 'virtualClusters[0].id' --output text\n"})}),"\n",(0,s.jsx)(n.p,{children:'This command retrieves the ID of the virtual cluster in the "ARRESTED" state.'}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Run the following command to delete the virtual cluster:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"aws emr-containers list-virtual-clusters --region <REGION> --states ARRESTED \\\n--query 'virtualClusters[0].id' --output text | xargs -I{} aws emr-containers delete-virtual-cluster \\\n--region <REGION> --id {}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Replace ",(0,s.jsx)(n.code,{children:"<VIRTUAL_CLUSTER_ID>"})," with the ID of the virtual cluster obtained from the previous step."]}),"\n",(0,s.jsx)(n.p,{children:'By executing these commands, you will be able to delete the virtual cluster that is in the "ARRESTED" state. This should resolve the unexpected state issue and allow you to proceed with further operations.'}),"\n",(0,s.jsx)(n.h2,{id:"terminating-namespace-issue",children:"Terminating namespace issue"}),"\n",(0,s.jsx)(n.p,{children:'If you encounter the issue where a namespace is stuck in the "Terminating" state and cannot be deleted, you can use the following command to remove the finalizers on the namespace:'}),"\n",(0,s.jsxs)(n.p,{children:["Note: Replace ",(0,s.jsx)(n.code,{children:"<namespace>"})," with the name of the namespace you want to delete."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'NAMESPACE=<namespace>\nkubectl get namespace $NAMESPACE -o json | sed \'s/"kubernetes"//\' | kubectl replace --raw "/api/v1/namespaces/$NAMESPACE/finalize" -f -\n'})}),"\n",(0,s.jsx)(n.p,{children:'This command retrieves the namespace details in JSON format, removes the "kubernetes" finalizer, and performs a replace operation to remove the finalizer from the namespace. This should allow the namespace to complete the termination process and be successfully deleted.'}),"\n",(0,s.jsx)(n.p,{children:"Please ensure that you have the necessary permissions to perform this operation. If you continue to experience issues or require further assistance, please reach out to our support team for additional guidance and troubleshooting steps."}),"\n",(0,s.jsx)(n.h2,{id:"kms-alias-alreadyexistsexception",children:"KMS Alias AlreadyExistsException"}),"\n",(0,s.jsxs)(n.p,{children:["During your Terraform installation or redeployment, you might encounter an error saying: ",(0,s.jsx)(n.code,{children:"AlreadyExistsException: An alias with the name ..."})," already exists. This happens when the KMS alias you're trying to create already exists in your AWS account."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'\u2502 Error: creating KMS Alias (alias/eks/trainium-inferentia): AlreadyExistsException: An alias with the name arn:aws:kms:us-west-2:23423434:alias/eks/trainium-inferentia already exists\n\u2502\n\u2502   with module.eks.module.kms.aws_kms_alias.this["cluster"],\n\u2502   on .terraform/modules/eks.kms/main.tf line 452, in resource "aws_kms_alias" "this":\n\u2502  452: resource "aws_kms_alias" "this" {\n\u2502\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,s.jsx)(n.p,{children:"To resolve this, delete the existing KMS alias using the aws kms delete-alias command. Remember to update the alias name and region in the command before running it."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"aws kms delete-alias --alias-name <KMS_ALIAS_NAME> --region <ENTER_REGION>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"error-creating-cloudwatch-logs-log-group",children:"Error: creating CloudWatch Logs Log Group"}),"\n",(0,s.jsx)(n.p,{children:"Terraform cannot create a CloudWatch Logs log group because it already exists in your AWS account."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'\u2577\n\u2502 Error: creating CloudWatch Logs Log Group (/aws/eks/trainium-inferentia/cluster): operation error CloudWatch Logs: CreateLogGroup, https response error StatusCode: 400, RequestID: 5c34c47a-72c6-44b2-a345-925824f24d38, ResourceAlreadyExistsException: The specified log group already exists\n\u2502\n\u2502   with module.eks.aws_cloudwatch_log_group.this[0],\n\u2502   on .terraform/modules/eks/main.tf line 106, in resource "aws_cloudwatch_log_group" "this":\n\u2502  106: resource "aws_cloudwatch_log_group" "this" {\n\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,s.jsx)(n.p,{children:"Delete the existing log group by updating log group name and the region."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"aws logs delete-log-group --log-group-name <LOG_GROUP_NAME> --region <ENTER_REGION>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"karpenter-error---missing-service-linked-role",children:"Karpenter Error - Missing Service Linked Role"}),"\n",(0,s.jsx)(n.p,{children:"Karpenter throws below error while trying to create new instances."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"error":"launching nodeclaim, creating instance, with fleet error(s), AuthFailure.ServiceLinkedRoleCreationNotPermitted: The provided credentials do not have permission to create the service-linked role for EC2 Spot Instances."}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,s.jsxs)(n.p,{children:["You will need to create the service linked role in the AWS account you're using to avoid ",(0,s.jsx)(n.code,{children:"ServiceLinkedRoleCreationNotPermitted"})," error."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"aws iam create-service-linked-role --aws-service-name spot.amazonaws.com\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(6540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);