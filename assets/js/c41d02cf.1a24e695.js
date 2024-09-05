"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[6948],{1890:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=i(4848),t=i(8453);const s={sidebar_position:5,sidebar_label:"Apache NiFi on EKS"},r="Apache NiFi on EKS",o={id:"blueprints/streaming-platforms/nifi",title:"Apache NiFi on EKS",description:"Introduction",source:"@site/docs/blueprints/streaming-platforms/nifi.md",sourceDirName:"blueprints/streaming-platforms",slug:"/blueprints/streaming-platforms/nifi",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/nifi",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/streaming-platforms/nifi.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Apache NiFi on EKS"},sidebar:"blueprints",previous:{title:"Kafka on EKS",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/kafka"},next:{title:"Spark Streaming from Kafka in EKS",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/spark-streaming"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy the EKS Cluster with Apache NiFi",id:"deploy-the-eks-cluster-with-apache-nifi",level:2},{value:"Clone the repository",id:"clone-the-repository",level:3},{value:"Initialize Terraform",id:"initialize-terraform",level:3},{value:"Terraform Plan",id:"terraform-plan",level:3},{value:"Deploy the pattern",id:"deploy-the-pattern",level:3},{value:"Verify Deployment",id:"verify-deployment",level:3},{value:"Apache NiFi UI",id:"apache-nifi-ui",level:4},{value:"Monitoring",id:"monitoring",level:3},{value:"Example",id:"example",level:3},{value:"Create IAM policies for accessing Amazon DynamoDB and AWS Kinesis",id:"create-iam-policies-for-accessing-amazon-dynamodb-and-aws-kinesis",level:4},{value:"Create AWS Kinesis Data Stream",id:"create-aws-kinesis-data-stream",level:4},{value:"Create Amazon DynamoDB table",id:"create-amazon-dynamodb-table",level:4},{value:"Create AWS credential setup",id:"create-aws-credential-setup",level:4},{value:"Cleanup",id:"cleanup",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"apache-nifi-on-eks",children:"Apache NiFi on EKS"})}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(n.p,{children:"Apache NiFi is an open-source data integration and management system designed to automate and manage the flow of data between systems. It provides a web-based user interface for creating, monitoring, and managing data flows in real-time."}),"\n",(0,a.jsx)(n.p,{children:"With its powerful and flexible architecture, Apache NiFi can handle a wide range of data sources, cloud platforms, and formats, including structured and unstructured data, and can be used for a variety of data integration scenarios, such as data ingest, data processing (low to medium level), data routing, data transformation, and data dissemination."}),"\n",(0,a.jsx)(n.p,{children:"Apache NiFi provides a GUI based interface for building and managing data flows, making it easier for non-technical users. It also offers robust security features, including SSL, SSH, and fine-grained access control, to ensure the safe and secure transfer of sensitive data. Whether you are a data analyst, a data engineer, or a data scientist, Apache NiFi provides a comprehensive solution for managing and integrating your data on AWS and other platforms."}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"This blueprint should be considered as experimental and should only be used for proof of concept."})}),"\n",(0,a.jsxs)(n.p,{children:["This ",(0,a.jsx)(n.a,{href:"https://github.com/awslabs/data-on-eks/tree/main/streaming-platforms/nifi",children:"example"})," deploys an EKS Cluster running the Apache NiFi cluster. In the example, Apache NIfi is streaming data from the AWS Kinesis Data Stream to an Amazon DynamoDB table after some format transformation."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Creates a new sample VPC, 3 Private Subnets and 3 Public Subnets"}),"\n",(0,a.jsx)(n.li,{children:"Creates Internet gateway for Public Subnets and NAT Gateway for Private Subnets"}),"\n",(0,a.jsx)(n.li,{children:"Creates EKS Cluster Control plane with public endpoint (for demo reasons only) with one managed node group"}),"\n",(0,a.jsx)(n.li,{children:"Deploys Apache NiFi, AWS Load Balancer Controller, Cert Manager and External DNS (optional) add-ons"}),"\n",(0,a.jsxs)(n.li,{children:["Deploys Apache NiFi cluster in the ",(0,a.jsx)(n.code,{children:"nifi"})," namespace"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(n.p,{children:"Ensure that you have installed the following tools on your machine."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://stedolan.github.io/jq/",children:"jq"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Additionally, for end-to-end configuration of Ingress, you will need to provide the following:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["A ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring.html",children:"Route53 Public Hosted Zone"}),' configured in the account where you are deploying this example. E.g. "example.com"']}),"\n",(0,a.jsxs)(n.li,{children:["An ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html",children:"ACM Certificate"}),' in the account + region where you are deploying this example. A wildcard certificate is preferred, e.g. "*.example.com"']}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"deploy-the-eks-cluster-with-apache-nifi",children:"Deploy the EKS Cluster with Apache NiFi"}),"\n",(0,a.jsx)(n.h3,{id:"clone-the-repository",children:"Clone the repository"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),"\n",(0,a.jsx)(n.h3,{id:"initialize-terraform",children:"Initialize Terraform"}),"\n",(0,a.jsxs)(n.p,{children:["Navigate into the example directory and run ",(0,a.jsx)(n.code,{children:"terraform init"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/streaming/nifi/\nterraform init\n"})}),"\n",(0,a.jsx)(n.h3,{id:"terraform-plan",children:"Terraform Plan"}),"\n",(0,a.jsx)(n.p,{children:"Run Terraform plan to verify the resources created by this execution."}),"\n",(0,a.jsx)(n.p,{children:"Provide a Route53 Hosted Zone hostname and a corresponding ACM Certificate;"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'export TF_VAR_eks_cluster_domain="<CHANGEME - example.com>"\nexport TF_VAR_acm_certificate_domain="<CHANGEME - *.example.com>"\nexport TF_VAR_nifi_sub_domain="nifi"\nexport TF_VAR_nifi_username="admin"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"deploy-the-pattern",children:"Deploy the pattern"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"terraform plan\nterraform apply\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Enter ",(0,a.jsx)(n.code,{children:"yes"})," to apply."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'Outputs:\n\nconfigure_kubectl = "aws eks --region us-west-2 update-kubeconfig --name nifi-on-eks"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"verify-deployment",children:"Verify Deployment"}),"\n",(0,a.jsx)(n.p,{children:"Update kubeconfig"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"aws eks --region us-west-2 update-kubeconfig --name nifi-on-eks\n"})}),"\n",(0,a.jsx)(n.p,{children:"Verify all pods are running."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"NAMESPACE           NAME                                                         READY   STATUS    RESTARTS      AGE\namazon-cloudwatch   aws-cloudwatch-metrics-7fbcq                                 1/1     Running   1 (43h ago)   2d\namazon-cloudwatch   aws-cloudwatch-metrics-82c9v                                 1/1     Running   1 (43h ago)   2d\namazon-cloudwatch   aws-cloudwatch-metrics-blrmt                                 1/1     Running   1 (43h ago)   2d\namazon-cloudwatch   aws-cloudwatch-metrics-dhpl7                                 1/1     Running   0             19h\namazon-cloudwatch   aws-cloudwatch-metrics-hpw5k                                 1/1     Running   1 (43h ago)   2d\ncert-manager        cert-manager-7d57b6576b-c52dw                                1/1     Running   1 (43h ago)   2d\ncert-manager        cert-manager-cainjector-86f7f4749-hs7d9                      1/1     Running   1 (43h ago)   2d\ncert-manager        cert-manager-webhook-66c85f8577-rxms8                        1/1     Running   1 (43h ago)   2d\nexternal-dns        external-dns-57bb948d75-g8kbs                                1/1     Running   0             41h\ngrafana             grafana-7f5b7f5d4c-znrqk                                     1/1     Running   1 (43h ago)   2d\nkube-system         aws-load-balancer-controller-7ff998fc9b-86gql                1/1     Running   1 (43h ago)   2d\nkube-system         aws-load-balancer-controller-7ff998fc9b-hct9k                1/1     Running   1 (43h ago)   2d\nkube-system         aws-node-4gcqk                                               1/1     Running   1 (43h ago)   2d\nkube-system         aws-node-4sssk                                               1/1     Running   0             19h\nkube-system         aws-node-4t62f                                               1/1     Running   1 (43h ago)   2d\nkube-system         aws-node-g4ndt                                               1/1     Running   1 (43h ago)   2d\nkube-system         aws-node-hlxmq                                               1/1     Running   1 (43h ago)   2d\nkube-system         cluster-autoscaler-aws-cluster-autoscaler-7bd6f7b94b-j7td5   1/1     Running   1 (43h ago)   2d\nkube-system         cluster-proportional-autoscaler-coredns-6ccfb4d9b5-27xsd     1/1     Running   1 (43h ago)   2d\nkube-system         coredns-5c5677bc78-rhzkx                                     1/1     Running   1 (43h ago)   2d\nkube-system         coredns-5c5677bc78-t7m5z                                     1/1     Running   1 (43h ago)   2d\nkube-system         ebs-csi-controller-87c4ff9d4-ffmwh                           6/6     Running   6 (43h ago)   2d\nkube-system         ebs-csi-controller-87c4ff9d4-nfw28                           6/6     Running   6 (43h ago)   2d\nkube-system         ebs-csi-node-4mkc8                                           3/3     Running   0             19h\nkube-system         ebs-csi-node-74xqs                                           3/3     Running   3 (43h ago)   2d\nkube-system         ebs-csi-node-8cw8t                                           3/3     Running   3 (43h ago)   2d\nkube-system         ebs-csi-node-cs9wp                                           3/3     Running   3 (43h ago)   2d\nkube-system         ebs-csi-node-ktdb7                                           3/3     Running   3 (43h ago)   2d\nkube-system         kube-proxy-4s72m                                             1/1     Running   0             19h\nkube-system         kube-proxy-95ptn                                             1/1     Running   1 (43h ago)   2d\nkube-system         kube-proxy-bhrdk                                             1/1     Running   1 (43h ago)   2d\nkube-system         kube-proxy-nzvb6                                             1/1     Running   1 (43h ago)   2d\nkube-system         kube-proxy-q9xkc                                             1/1     Running   1 (43h ago)   2d\nkube-system         metrics-server-fc87d766-dd647                                1/1     Running   1 (43h ago)   2d\nkube-system         metrics-server-fc87d766-vv8z9                                1/1     Running   1 (43h ago)   2d\nlogging             aws-for-fluent-bit-b5vqg                                     1/1     Running   1 (43h ago)   2d\nlogging             aws-for-fluent-bit-pklhr                                     1/1     Running   0             19h\nlogging             aws-for-fluent-bit-rq2nc                                     1/1     Running   1 (43h ago)   2d\nlogging             aws-for-fluent-bit-tnmtl                                     1/1     Running   1 (43h ago)   2d\nlogging             aws-for-fluent-bit-zzhfc                                     1/1     Running   1 (43h ago)   2d\nnifi                nifi-0                                                       5/5     Running   0             41h\nnifi                nifi-1                                                       5/5     Running   0             41h\nnifi                nifi-2                                                       5/5     Running   0             41h\nnifi                nifi-registry-0                                              1/1     Running   0             41h\nnifi                nifi-zookeeper-0                                             1/1     Running   0             41h\nnifi                nifi-zookeeper-1                                             1/1     Running   0             41h\nnifi                nifi-zookeeper-2                                             1/1     Running   0             18h\nprometheus          prometheus-alertmanager-655fcb46df-2qh8h                     2/2     Running   2 (43h ago)   2d\nprometheus          prometheus-kube-state-metrics-549f6d74dd-wwhtr               1/1     Running   1 (43h ago)   2d\nprometheus          prometheus-node-exporter-5cpzk                               1/1     Running   0             19h\nprometheus          prometheus-node-exporter-8jhbk                               1/1     Running   1 (43h ago)   2d\nprometheus          prometheus-node-exporter-nbd42                               1/1     Running   1 (43h ago)   2d\nprometheus          prometheus-node-exporter-str6t                               1/1     Running   1 (43h ago)   2d\nprometheus          prometheus-node-exporter-zkf5s                               1/1     Running   1 (43h ago)   2d\nprometheus          prometheus-pushgateway-677c6fdd5-9tqkl                       1/1     Running   1 (43h ago)   2d\nprometheus          prometheus-server-7bf9cbb9cf-b2zgl                           2/2     Running   2 (43h ago)   2d\nvpa                 vpa-recommender-7c6bbb4f9b-rjhr7                             1/1     Running   1 (43h ago)   2d\nvpa                 vpa-updater-7975b9dc55-g6zf6                                 1/1     Running   1 (43h ago)   2d\n"})}),"\n",(0,a.jsx)(n.h4,{id:"apache-nifi-ui",children:"Apache NiFi UI"}),"\n",(0,a.jsxs)(n.p,{children:['The Apache NiFi Dashboard can be opened at the following url "',(0,a.jsx)(n.a,{href:"https://nifi.example.com/nifi",children:"https://nifi.example.com/nifi"}),'"']}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Login",src:i(8221).A+"",width:"579",height:"336"})}),"\n",(0,a.jsxs)(n.p,{children:["Run the command below to retrieve NiFi user's password and default username as ",(0,a.jsx)(n.code,{children:"admin"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"aws secretsmanager get-secret-value --secret-id <nifi_login_password_secret_name from terraform outputs> --region <region> | jq '.SecretString' --raw-output\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Canvas",src:i(9592).A+"",width:"1075",height:"676"})}),"\n",(0,a.jsx)(n.h3,{id:"monitoring",children:"Monitoring"}),"\n",(0,a.jsx)(n.p,{children:"Apache Nifi can be monitored using metrics reported by PrometheusReportingTask. JVM metrics are disabled by default, let's enable the JVM metrics by navigating to Controller Settings by the clicking on the hamburger icon (three horizontal bars) in the top right corner."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Controller Settings",src:i(336).A+"",width:"900",height:"649"})}),"\n",(0,a.jsxs)(n.p,{children:["Next click on the ",(0,a.jsx)(n.code,{children:"REPORTING TASK"})," tab and then click the ",(0,a.jsx)(n.code,{children:"+"})," icon and search for ",(0,a.jsx)(n.code,{children:"PrometheusReportingTask"})," in the filter. Select the ",(0,a.jsx)(n.code,{children:"PrometheusReportingTask"})," and click ",(0,a.jsx)(n.code,{children:"ADD"})," button."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Prometheus Reporting",src:i(3477).A+"",width:"898",height:"650"})}),"\n",(0,a.jsx)(n.p,{children:"The prometheus reporting task is stopped by default."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Reporting Task Edit",src:i(1095).A+"",width:"897",height:"650"})}),"\n",(0,a.jsxs)(n.p,{children:["Click on the pencil icon to edit the task and click on the PROPERTIES tab. Set the ",(0,a.jsx)(n.code,{children:"Send JVM metrics"})," to ",(0,a.jsx)(n.code,{children:"true"})," and click on Apply. Start the task by clicking on the play icon and ensure it's in running state."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Reporting Task True",src:i(1067).A+"",width:"1132",height:"697"})}),"\n",(0,a.jsxs)(n.p,{children:["This blueprint uses the ",(0,a.jsx)(n.code,{children:"prometheus"})," and ",(0,a.jsx)(n.code,{children:"grafana"})," to create a monitoring stack for getting visibility into your Apache NiFi cluster."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"aws secretsmanager get-secret-value --secret-id <grafana_secret_name from terraform outputs> --region <region> | jq '.SecretString' --raw-output\n"})}),"\n",(0,a.jsxs)(n.p,{children:['Run the command below and open the Grafana dashboard using the url "',(0,a.jsx)(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"}),'".']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"kubectl port-forward svc/grafana -n grafana 8080:80\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Import Apache NiFi ",(0,a.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/12314-nifi-prometheusreportingtask-dashboard/",children:"Grafana dashboard"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Grafana Dashboard",src:i(4282).A+"",width:"1539",height:"913"})}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.h4,{id:"create-iam-policies-for-accessing-amazon-dynamodb-and-aws-kinesis",children:"Create IAM policies for accessing Amazon DynamoDB and AWS Kinesis"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Create an AWS IAM role: Create an AWS IAM role with permissions to access the AWS Kinesis data stream and assign this role to the AWS EKS cluster hosting Apache NiFi."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Attach the IAM policy: Attach a policy to the IAM role that limits access to the Kinesis data stream to read-only and IAM policy to enable EKS role to write Amazon DynamoDB table. Here's an example policy:"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "Nifi-access-to-Kinesis",\n            "Effect": "Allow",\n            "Action": [\n                "kinesis:DescribeStream",\n                "kinesis:GetRecords",\n                "kinesis:GetShardIterator",\n                "kinesis:ListStreams"\n            ],\n            "Resource": "arn:aws:kinesis:<REGION>:<ACCOUNT-ID>:stream/kds-stream-nifi-on-EKS"\n        }\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "Sid": "DynamoDBTableAccess",\n    "Effect": "Allow",\n    "Action": [\n        "dynamodb:BatchGetItem",\n        "dynamodb:BatchWriteItem",\n        "dynamodb:ConditionCheckItem",\n        "dynamodb:PutItem",\n        "dynamodb:DescribeTable",\n        "dynamodb:DeleteItem",\n        "dynamodb:GetItem",\n        "dynamodb:Scan",\n        "dynamodb:Query",\n        "dynamodb:UpdateItem"\n    ],\n    "Resource": "arn:aws:dynamodb:<REGION>:<ACCOUNT-ID>:table/NifiStreamingTable"\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"create-aws-kinesis-data-stream",children:"Create AWS Kinesis Data Stream"}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Create an AWS Kinesis data stream: Log in to the AWS Management Console, and create a Kinesis data stream in the region where you want to collect your data or use the below command line to create one."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"aws kinesis create-stream --stream-name kds-stream-nifi-on-EKS\n"})}),"\n",(0,a.jsx)(n.h4,{id:"create-amazon-dynamodb-table",children:"Create Amazon DynamoDB table"}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Create a Amazon DynamoDB in the same AWS Account using the AWS console or the command line. Create a JSON file with Amazon DynamoDb table information called JSONSchemaDynamoDBTABLE.json"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'\n    "TableName": "NifiStreamingTable",\n    "KeySchema": [\n      { "AttributeName": "Name", "KeyType": "HASH" },\n      { "AttributeName": "Age", "KeyType": "RANGE" }},\n      { "AttributeName": "Location", "KeyType": "RANGE" }\n    ],\n    "AttributeDefinitions": [\n      { "AttributeName": "Name", "KeyType": "S" },\n      { "AttributeName": "Age", "KeyType": "S" }},\n      { "AttributeName": "Location", "KeyType": "S" }\n    ],\n    "ProvisionedThroughput": {\n      "ReadCapacityUnits": 5,\n      "WriteCapacityUnits": 5\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Execute the command line to create the Amazon DynamoDB table from the JSON file."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"aws dynamodb create-table --cli-input-json  JSONSchemaDynamoDBTABLE.json\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"6",children:["\n",(0,a.jsx)(n.li,{children:"Open the Apache Nifi on the EKS UI using the endpoint, create a process group, and name it NifiStreamingExample."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Canvas",src:i(686).A+"",width:"1266",height:"376"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Canvas",src:i(5490).A+"",width:"1130",height:"636"})}),"\n",(0,a.jsxs)(n.ol,{start:"7",children:["\n",(0,a.jsx)(n.li,{children:"Double-click on the Nifi-on-EKS-process-group and enter the process to create the data flow. Drag the processor icon from the top left, type Kinesis into the search window, and select the ConsumeKinesisStream processor. To create a Kinesis Consumer, click ADD.\xa0"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Canvas",src:i(5596).A+"",width:"798",height:"721"})}),"\n",(0,a.jsxs)(n.ol,{start:"8",children:["\n",(0,a.jsx)(n.li,{children:"Double click on the Kinesis processor, select the properties tab, and fill in the information for the configuration below.\na. Amazon Kinesis Stream Name\nb. Application Name\nc. Region\nd. AWS Credentials Provider Service - Select AWSCredentialsProviderControllerService and create one."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Canvas",src:i(9203).A+"",width:"1420",height:"802"})}),"\n",(0,a.jsx)(n.h4,{id:"create-aws-credential-setup",children:"Create AWS credential setup"}),"\n",(0,a.jsxs)(n.ol,{start:"9",children:["\n",(0,a.jsxs)(n.li,{children:["Setup the AWS credentials to access the AWS resource in the account using the AWS Credentials Provider Service. In this example, we are using the access key and secret key. ",(0,a.jsxs)("em",{children:[(0,a.jsx)(n.strong,{children:"Note"})," : Other options are IAM role-based, assumed role options to authenticate an AWS resources."]})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Canvas",src:i(8442).A+"",width:"2520",height:"323"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Canvas",src:i(7425).A+"",width:"802",height:"658"})}),"\n",(0,a.jsxs)(n.ol,{start:"10",children:["\n",(0,a.jsx)(n.li,{children:'Drag the processor icon from the top left, type "dynamoDB" into the search window, and select the "PutDynamoDBRecord processor. Click on ADD to create an Amazon DynamoDB writer. Configure the processor using the fields below.'}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"a. Record Reader - Change it to JSONTreeReader\nb. AWS Credentials Provider Service - select the previously created configuration\nc. Region\nb. Table Name\nd. Partition Key Field - select the partition field"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"Apache NiFi Canvas",src:i(4712).A+"",width:"1599",height:"479"}),"\n",(0,a.jsx)(n.img,{alt:"Apache NiFi Canvas",src:i(6367).A+"",width:"1408",height:"795"}),"\n",(0,a.jsx)(n.img,{alt:"Apache NiFi Canvas",src:i(7622).A+"",width:"686",height:"406"})]}),"\n",(0,a.jsxs)(n.ol,{start:"11",children:["\n",(0,a.jsx)(n.li,{children:"Hover over the Kinesis consumer and drag it to the DynamoDB writer. The connection will be made, and the success queue will be created."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Canvas",src:i(8268).A+"",width:"714",height:"370"})}),"\n",(0,a.jsxs)(n.ol,{start:"12",children:["\n",(0,a.jsx)(n.li,{children:"For the Kinesis Consumer and DynamoDB, create an error route to a funnel. This is to route the unprocessed, failed, and successful records for further processing. Note: Under the Relationship tab, you can see all the options for each processor. For the DynamoDB writer, success should always point to a funnel."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Apache NiFi Canvas",src:i(9893).A+"",width:"2029",height:"787"})}),"\n",(0,a.jsxs)(n.ol,{start:"13",children:["\n",(0,a.jsx)(n.li,{children:'Check that none of the processors have any Hazard symbols. Right-click on the grid and click "run the data flow." You can start seeing the data flowing in.'}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"cleanup",children:"Cleanup"}),"\n",(0,a.jsx)(n.p,{children:"To clean up your environment, destroy the Terraform modules in reverse order."}),"\n",(0,a.jsx)(n.p,{children:"Destroy the Kubernetes Add-ons, EKS cluster with Node groups and VPC"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'terraform destroy -target="module.eks_blueprints_kubernetes_addons" --auto-approve\nterraform destroy -target="module.eks" --auto-approve\nterraform destroy -target="module.vpc" --auto-approve\n'})}),"\n",(0,a.jsx)(n.p,{children:"Finally, destroy any additional resources that are not in the above modules"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"terraform destroy --auto-approve\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},9592:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-canvas-bba0ebcd97e50d3429571d813d3be3ee.png"},336:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-controller-settings-2322ed628f3dad48918c935d7c0867da.png"},4282:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-grafana-9c3fb026856953e19d65908eb53098d3.png"},3477:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-prometheus-reporting-0693c3b9813544b018f7e27c2c5516d1.png"},1095:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-reporting-task-edit-03b1f21f3bcaa5385da9df446a8ce818.png"},1067:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-reporting-task-true-66089a1fe60f6a1041b3ab53df2df953.png"},686:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-screenshot-1-be862777c17ed6c9fb024df6635827d6.png"},8268:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-screenshot-10-0bc436d1f5724755a18153a1d962ae4b.png"},9893:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-screenshot-11-6f7384af94573f6e71676bd222b0fb68.png"},5490:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-screenshot-2-700ad5636868aab82dbd4e2289d985a9.png"},5596:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-screenshot-3-9654b1b59d00543d7652828eab77dde0.png"},9203:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-screenshot-4-d2d60f9ee74d459e8b4578cbeb1b5b31.png"},8442:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-screenshot-5-96d58a1454311a411935d68c7913cb32.png"},7425:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-screenshot-6-4529127e639038e6cee82d4f494a9191.png"},4712:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-screenshot-7-2db4a3c85f11f2cb1d87a9043246b3a5.png"},6367:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-screenshot-8-bbc4049a1b46e3d15015382aae6c3380.png"},7622:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-screenshot-9-3c36bc1b64419512e2f7768fc4488498.png"},8221:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/nifi-a79017d2a2a850f40a2e1ec172af3203.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var a=i(6540);const t={},s=a.createContext(t);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);