"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[901],{1665:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=a(4848),s=a(8453);const r={sidebar_position:2,sidebar_label:"CloudNativePG PostgreSQL"},o="Deploying PostgreSQL Database on EKS using CloudNativePG Operator",i={id:"blueprints/distributed-databases/cloudnative-postgres",title:"Deploying PostgreSQL Database on EKS using CloudNativePG Operator",description:"Introduction",source:"@site/docs/blueprints/distributed-databases/cloudnative-postgres.md",sourceDirName:"blueprints/distributed-databases",slug:"/blueprints/distributed-databases/cloudnative-postgres",permalink:"/data-on-eks/docs/blueprints/distributed-databases/cloudnative-postgres",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/distributed-databases/cloudnative-postgres.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"CloudNativePG PostgreSQL"},sidebar:"blueprints",previous:{title:"Introduction",permalink:"/data-on-eks/docs/blueprints/distributed-databases/"},next:{title:"Apache Pinot",permalink:"/data-on-eks/docs/blueprints/distributed-databases/pinot"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy the EKS Cluster with CloudNativePG Operator",id:"deploy-the-eks-cluster-with-cloudnativepg-operator",level:3},{value:"Verify Deployment",id:"verify-deployment",level:3},{value:"Deploy a PostgreSQL cluster",id:"deploy-a-postgresql-cluster",level:3},{value:"Storage",id:"storage",level:4},{value:"Monitoring",id:"monitoring",level:3},{value:"Import database sample",id:"import-database-sample",level:3},{value:"Create Backup to S3",id:"create-backup-to-s3",level:3},{value:"Restore",id:"restore",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploying-postgresql-database-on-eks-using-cloudnativepg-operator",children:"Deploying PostgreSQL Database on EKS using CloudNativePG Operator"})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"CloudNativePG"})," is an open source\n",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/",children:"operator"}),"\ndesigned to manage ",(0,t.jsx)(n.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"})," workloads ",(0,t.jsx)(n.a,{href:"https://kubernetes.io",children:"Kubernetes"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["It defines a new Kubernetes resource called ",(0,t.jsx)(n.code,{children:"Cluster"})," representing a PostgreSQL\ncluster made up of a single primary and an optional number of replicas that co-exist\nin a chosen Kubernetes namespace for High Availability and offloading of\nread-only queries."]}),"\n",(0,t.jsx)(n.p,{children:"Applications that reside in the same Kubernetes cluster can access the\nPostgreSQL database using a service which is solely managed by the operator,\nwithout having to worry about changes of the primary role following a failover\nor a switchover. Applications that reside outside the Kubernetes cluster, need\nto configure a Service or Ingress object to expose the Postgres via TCP.\nWeb applications can take advantage of the native connection pooler based on PgBouncer."}),"\n",(0,t.jsxs)(n.p,{children:["CloudNativePG was originally built by ",(0,t.jsx)(n.a,{href:"https://www.enterprisedb.com",children:"EDB"}),", then\nreleased open source under Apache License 2.0 and submitted for CNCF Sandbox in April 2022.\nThe ",(0,t.jsx)(n.a,{href:"https://github.com/cloudnative-pg/cloudnative-pg",children:"source code repository is in Github"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["More details about the project will be found on this ",(0,t.jsx)(n.a,{href:"https://cloudnative-pg.io",children:"link"})]}),"\n",(0,t.jsx)(n.h2,{id:"deploying-the-solution",children:"Deploying the Solution"}),"\n",(0,t.jsx)(n.p,{children:"Let's go through the deployment steps"}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"Ensure that you have installed the following tools on your machine."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://formulae.brew.sh/formula/libpq",children:"psql"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-the-eks-cluster-with-cloudnativepg-operator",children:"Deploy the EKS Cluster with CloudNativePG Operator"}),"\n",(0,t.jsx)(n.p,{children:"First, clone the repository"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Navigate into cloudnative-postgres folder and run ",(0,t.jsx)(n.code,{children:"install.sh"})," script. By default the script deploys EKS cluster to ",(0,t.jsx)(n.code,{children:"us-west-2"})," region. Update ",(0,t.jsx)(n.code,{children:"variables.tf"})," to change the region. This is also the time to update any other input variables or make any other changes to the terraform template."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/distributed-databases/cloudnative-postgres\n\n./install.sh\n"})}),"\n",(0,t.jsx)(n.h3,{id:"verify-deployment",children:"Verify Deployment"}),"\n",(0,t.jsx)(n.p,{children:"Verify the Amazon EKS Cluster"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"aws eks describe-cluster --name cnpg-on-eks\n"})}),"\n",(0,t.jsx)(n.p,{children:"Update local kubeconfig so we can access kubernetes cluster"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"aws eks update-kubeconfig --name cnpg-on-eks --region us-west-2\n"})}),"\n",(0,t.jsx)(n.p,{children:"First, lets verify that we have worker nodes running in the cluster."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get nodes\nNAME                                        STATUS   ROLES    AGE     VERSION\nip-10-1-10-192.us-west-2.compute.internal   Ready    <none>   4d17h   v1.25.6-eks-48e63af\nip-10-1-10-249.us-west-2.compute.internal   Ready    <none>   4d17h   v1.25.6-eks-48e63af\nip-10-1-11-38.us-west-2.compute.internal    Ready    <none>   4d17h   v1.25.6-eks-48e63af\nip-10-1-12-195.us-west-2.compute.internal   Ready    <none>   4d17h   v1.25.6-eks-48e63af\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, lets verify all the pods are running."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get pods --namespace=monitoring\nNAME                                                        READY   STATUS    RESTARTS        AGE\nalertmanager-kube-prometheus-stack-alertmanager-0           2/2     Running   1 (4d17h ago)   4d17h\nkube-prometheus-stack-grafana-7f8b9dc64b-sb27n              3/3     Running   0               4d17h\nkube-prometheus-stack-kube-state-metrics-5979d9d98c-r9fxn   1/1     Running   0               60m\nkube-prometheus-stack-operator-554b6f9965-zqszr             1/1     Running   0               60m\nprometheus-kube-prometheus-stack-prometheus-0               2/2     Running   0               4d17h\n\nkubectl get pods --namespace=cnpg-system\nNAME                                          READY   STATUS    RESTARTS   AGE\ncnpg-on-eks-cloudnative-pg-587d5d8fc5-65z9j   1/1     Running   0          4d17h\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deploy-a-postgresql-cluster",children:"Deploy a PostgreSQL cluster"}),"\n",(0,t.jsxs)(n.p,{children:["First of all, we need to create a storageclass using the ",(0,t.jsx)(n.code,{children:"ebs-csi-driver"}),", a demo namespace and kubernetes secrets for login/password for database authentication ",(0,t.jsx)(n.code,{children:"app-auth"}),". Check examples folder for all kubernetes manifests."]}),"\n",(0,t.jsx)(n.h4,{id:"storage",children:"Storage"}),"\n",(0,t.jsx)(n.p,{children:"For running a highly scalable and durable self-managed PostgreSQL database on Kubernetes with Amazon EKS and EC2, it is recommended to use Amazon Elastic Block Store (EBS) volumes that provide high performance and fault tolerance. The preferred EBS volume types for this use case are:"}),"\n",(0,t.jsx)(n.p,{children:"1.Provisioned IOPS SSD (io2 or io1):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Designed for I/O-intensive workloads such as databases."}),"\n",(0,t.jsx)(n.li,{children:"Offers consistent and low-latency performance."}),"\n",(0,t.jsx)(n.li,{children:"Allows you to provision a specific number of IOPS (input/output operations per second) according to your requirements."}),"\n",(0,t.jsx)(n.li,{children:"Provides up to 64,000 IOPS per volume and 1,000 MB/s throughput, making it suitable for demanding database workloads."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"2.General Purpose SSD (gp3 or gp2):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Suitable for most workloads and offers a balance between performance and cost."}),"\n",(0,t.jsx)(n.li,{children:"Provides a baseline performance of 3,000 IOPS and 125 MB/s throughput per volume, which can be increased if needed (up to 16,000 IOPS and 1,000 MB/s for gp3)."}),"\n",(0,t.jsx)(n.li,{children:"Recommended for less I/O-intensive database workloads or when cost is a primary concern."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can find both storageclass template in ",(0,t.jsx)(n.code,{children:"examples"})," folder."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl create -f examples/storageclass.yaml\n\nkubectl create -f examples/auth-prod.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As with any other deployment in Kubernetes, to deploy a PostgreSQL cluster you need to apply a configuration file that defines your desired ",(0,t.jsx)(n.code,{children:"Cluster"}),". CloudNativePG operator offers two type of Bootstrapping a new database:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Bootstrap an empty cluster"}),"\n",(0,t.jsx)(n.li,{children:"Bootstrap From another cluster."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In this first example, we are going to create a new empty database cluster using ",(0,t.jsx)(n.code,{children:"initdb"}),"flags. We are going to use the template below by modifying the IAM role for IRSA configuration ",(0,t.jsx)(n.em,{children:"1"})," and S3 bucket for backup restore process and WAL archiving ",(0,t.jsx)(n.em,{children:"2"}),". The Terraform could already created this use ",(0,t.jsx)(n.code,{children:"terraform output"})," to extract these parameters:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'cd data-on-eks/distributed-databases/cloudnative-postgres\n\nterraform output\n\nbarman_backup_irsa = "arn:aws:iam::<your_account_id>:role/cnpg-on-eks-prod-irsa"\nbarman_s3_bucket = "XXXX-cnpg-barman-bucket"\nconfigure_kubectl = "aws eks --region us-west-2 update-kubeconfig --name cnpg-on-eks"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'---\napiVersion: postgresql.cnpg.io/v1\nkind: Cluster\nmetadata:\n  name: prod\n  namespace: demo\nspec:\n  description: "Cluster Demo for DoEKS"\n  # Choose your PostGres Database Version\n  imageName: ghcr.io/cloudnative-pg/postgresql:15.2\n  # Number of Replicas\n  instances: 3\n  startDelay: 300\n  stopDelay: 300\n  replicationSlots:\n    highAvailability:\n      enabled: true\n    updateInterval: 300\n  primaryUpdateStrategy: unsupervised\n  serviceAccountTemplate:\n    # For backup and restore, we use IRSA for barman tool.\n    # You will find this IAM role on terraform outputs.\n    metadata:\n      annotations:\n        eks.amazonaws.com/role-arn: arn:aws:iam::<<account_id>>:role/cnpg-on-eks-prod-irsa #1\n  postgresql:\n    parameters:\n      shared_buffers: 256MB\n      pg_stat_statements.max: \'10000\'\n      pg_stat_statements.track: all\n      auto_explain.log_min_duration: \'10s\'\n    pg_hba:\n      # - hostssl app all all cert\n      - host app app all password\n  logLevel: debug\n  storage:\n    storageClass: ebs-sc\n    size: 1Gi\n  walStorage:\n    storageClass: ebs-sc\n    size: 1Gi\n  monitoring:\n    enablePodMonitor: true\n  bootstrap:\n    initdb: # Deploying a new cluster\n      database: WorldDB\n      owner: app\n      secret:\n        name: app-auth\n  backup:\n    barmanObjectStore:\n    # For backup, we S3 bucket to store data.\n    # On this Blueprint, we create an S3 check the terraform output for it.\n      destinationPath: s3://<your-s3-barman-bucket> #2\n      s3Credentials:\n        inheritFromIAMRole: true\n      wal:\n        compression: gzip\n        maxParallel: 8\n    retentionPolicy: "30d"\n\n  resources: # m5large: m5xlarge 2vCPU, 8GI RAM\n    requests:\n      memory: "512Mi"\n      cpu: "1"\n    limits:\n      memory: "1Gi"\n      cpu: "2"\n\n  affinity:\n    enablePodAntiAffinity: true\n    topologyKey: failure-domain.beta.kubernetes.io/zone\n\n  nodeMaintenanceWindow:\n    inProgress: false\n    reusePVC: false\n\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"Once updated, you can apply your template."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl create -f examples/prod-cluster.yaml\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify that CloudNatvicePG operator has created three pods: one primary and two standby."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\nkubectl get pods,svc -n demo\nNAME         READY   STATUS    RESTARTS   AGE\npod/prod-1   1/1     Running   0          4m36s\npod/prod-2   1/1     Running   0          3m45s\npod/prod-3   1/1     Running   0          3m9s\n\nNAME               TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE\nservice/prod-any   ClusterIP   172.20.230.153   <none>        5432/TCP   4m54s\nservice/prod-r     ClusterIP   172.20.33.61     <none>        5432/TCP   4m54s\nservice/prod-ro    ClusterIP   172.20.96.16     <none>        5432/TCP   4m53s\nservice/prod-rw    ClusterIP   172.20.236.1     <none>        5432/TCP   4m53s\n"})}),"\n",(0,t.jsx)(n.p,{children:"The operator created also three services:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-rw"}),": points only to the primary instances of cluster database"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-ro"}),"points only to hot standby replicas for read-only-workloads"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-r"}),"points to any of the instances for read-only workloads"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Note that ",(0,t.jsx)(n.code,{children:"-any"})," points on all the instances."]}),"\n",(0,t.jsxs)(n.p,{children:["Another way to check Cluster status is by using ",(0,t.jsx)(n.a,{href:"https://cloudnative-pg.io/documentation/1.19/cnpg-plugin/#cloudnativepg-plugin",children:"cloudnative-pg kubectl plugin"})," offered by the CloudNativePG community,"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl cnpg status prod\n\nCluster Summary\nName:               prod\nNamespace:          demo\nSystem ID:          7214866198623563798\nPostgreSQL Image:   ghcr.io/cloudnative-pg/postgresql:15.2\nPrimary instance:   prod-1\nStatus:             Cluster in healthy state\nInstances:          3\nReady instances:    3\nCurrent Write LSN:  0/6000000 (Timeline: 1 - WAL File: 000000010000000000000005)\n\nCertificates Status\nCertificate Name  Expiration Date                Days Left Until Expiration\n----------------  ---------------                --------------------------\nprod-ca           2023-06-24 14:40:27 +0000 UTC  89.96\nprod-replication  2023-06-24 14:40:27 +0000 UTC  89.96\nprod-server       2023-06-24 14:40:27 +0000 UTC  89.96\n\nContinuous Backup status\nFirst Point of Recoverability:  Not Available\nWorking WAL archiving:          OK\nWALs waiting to be archived:    0\nLast Archived WAL:              000000010000000000000005   @   2023-03-26T14:52:09.24307Z\nLast Failed WAL:                -\n\nStreaming Replication status\nReplication Slots Enabled\nName    Sent LSN   Write LSN  Flush LSN  Replay LSN  Write Lag  Flush Lag  Replay Lag  State      Sync State  Sync Priority  Replication Slot\n----    --------   ---------  ---------  ----------  ---------  ---------  ----------  -----      ----------  -------------  ----------------\nprod-2  0/6000000  0/6000000  0/6000000  0/6000000   00:00:00   00:00:00   00:00:00    streaming  async       0              active\nprod-3  0/6000000  0/6000000  0/6000000  0/6000000   00:00:00   00:00:00   00:00:00    streaming  async       0              active\n\nUnmanaged Replication Slot Status\nNo unmanaged replication slots found\n\nInstances status\nName    Database Size  Current LSN  Replication role  Status  QoS         Manager Version  Node\n----    -------------  -----------  ----------------  ------  ---         ---------------  ----\nprod-1  29 MB          0/6000000    Primary           OK      BestEffort  1.19.0           ip-10-1-10-192.us-west-2.compute.internal\nprod-2  29 MB          0/6000000    Standby (async)   OK      BestEffort  1.19.0           ip-10-1-12-195.us-west-2.compute.internal\nprod-3  29 MB          0/6000000    Standby (async)   OK      BestEffort  1.19.0           ip-10-1-11-38.us-west-2.compute.internal\n"})}),"\n",(0,t.jsx)(n.h3,{id:"monitoring",children:"Monitoring"}),"\n",(0,t.jsx)(n.p,{children:"In this example, we deployed a Prometheus and Grafana addons to monitor all database clusters created by CloudNativePG. Let's check Grafana dashboard."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl -n monitoring port-forward svc/kube-prometheus-stack-grafana 8080:80\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CloudNativePG Grafana Dashboard",src:a(5212).A+"",width:"3554",height:"1666"})}),"\n",(0,t.jsx)(n.h3,{id:"import-database-sample",children:"Import database sample"}),"\n",(0,t.jsxs)(n.p,{children:["You can expose your database outside the cluster using ingress-controller or kubernetes service type ",(0,t.jsx)(n.code,{children:"LoadBalancer"}),". However, for internal usage inside your EKS cluster, you can use kubernetes service ",(0,t.jsx)(n.code,{children:"prod-rw"})," and ",(0,t.jsx)(n.code,{children:"prod-ro"}),".\nIn this section, we are going to expose read-write service ",(0,t.jsx)(n.code,{children:"-rw"}),"using ",(0,t.jsx)(n.code,{children:"kubectl port-forward"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\nkubectl port-forward svc/prod-rw 5432:5432 -n demo\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, we use ",(0,t.jsx)(n.code,{children:"psql"})," cli to import ",(0,t.jsx)(n.code,{children:"world.sql"})," into our database instance WorldDB using credentials from ",(0,t.jsx)(n.code,{children:"app-auth"})," secrets."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\npsql -h localhost --port 5432 -U app -d WorldDB < world.sql\n\n# Quick check on db tables.\n\npsql -h localhost --port 5432 -U app -d WorldDB -c '\\dt'\nPassword for user app:\n            List of relations\n Schema |      Name       | Type  | Owner\n--------+-----------------+-------+-------\n public | city            | table | app\n public | country         | table | app\n public | countrylanguage | table | app\n(3 rows)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"create-backup-to-s3",children:"Create Backup to S3"}),"\n",(0,t.jsxs)(n.p,{children:["Now that we had a running database with data, CloudNativePG operator offers backup-restore feature using ",(0,t.jsx)(n.a,{href:"https://pgbarman.org/",children:"barman"})," tool. CloudNativePG allows database admin to create on-demand database or Scheduled backups and for more details on ",(0,t.jsx)(n.a,{href:"https://cloudnative-pg.io/documentation/1.19/backup_recovery/",children:"documentations"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In this example, we will create a Backup object to start a backup process immediately."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: postgresql.cnpg.io/v1\nkind: Backup\nmetadata:\n  name: ondemand\nspec:\n  cluster:\n    name: prod\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" kubectl create -f examples/backup-od.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"It will take couple minutes to run, then, check the backup process"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl describe backup ondemand\n\nEvents:\n  Type    Reason     Age   From                   Message\n  ----    ------     ----  ----                   -------\n  Normal  Starting   60s   cloudnative-pg-backup  Starting backup for cluster prod\n  Normal  Starting   60s   instance-manager       Backup started\n  Normal  Completed  56s   instance-manager       Backup completed\n"})}),"\n",(0,t.jsx)(n.h3,{id:"restore",children:"Restore"}),"\n",(0,t.jsxs)(n.p,{children:["For restore, we use bootstrap a new cluster using backup file on S3. The backup tool ",(0,t.jsx)(n.em,{children:"barman"})," manages restore process, but, it doesn't support backup and restore for kubernetes secrets. This must be managed separately, like using csi-secrets-driver with AWS SecretsManager."]}),"\n",(0,t.jsx)(n.p,{children:"First let's delete prod database."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl delete cluster prod -n demo\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then, update your template ",(0,t.jsx)(n.code,{children:"examples/cluster-restore.yaml"})," with your S3 bucket and IAM role. Note that on restore template, CloudNativePG use ",(0,t.jsx)(n.code,{children:"externalClusters"})," to point on the database."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"  kubectl create -f examples/cluster-restore.yaml\n\n  Type    Reason                       Age    From            Message\n  ----    ------                       ----   ----            -------\n  Normal  CreatingPodDisruptionBudget  7m12s  cloudnative-pg  Creating PodDisruptionBudget prod-primary\n  Normal  CreatingPodDisruptionBudget  7m12s  cloudnative-pg  Creating PodDisruptionBudget prod\n  Normal  CreatingServiceAccount       7m12s  cloudnative-pg  Creating ServiceAccount\n  Normal  CreatingRole                 7m12s  cloudnative-pg  Creating Cluster Role\n  Normal  CreatingInstance             7m12s  cloudnative-pg  Primary instance (from backup)\n  Normal  CreatingInstance             6m33s  cloudnative-pg  Creating instance prod-2\n  Normal  CreatingInstance             5m51s  cloudnative-pg  Creating instance prod-3\n"})}),"\n",(0,t.jsx)(n.p,{children:"When creating a new cluster, the operator will create a ServiceAccount with IRSA configuration as described on Cluster resources. Make sure the trust policy points the right ServiceAccount."}),"\n",(0,t.jsx)(n.p,{children:"Let's check if the data were covered as expected."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\npsql -h localhost --port 5432 -U app -d WorldDB -c '\\dt'\nPassword for user app:\n            List of relations\n Schema |      Name       | Type  | Owner\n--------+-----------------+-------+-------\n public | city            | table | app\n public | country         | table | app\n public | countrylanguage | table | app\n(3 rows)\n\npsql -h localhost --port 5432 -U app -d WorldDB -c 'SELECT CURRENT_TIME;'\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["CloudNativePG operator provides Level 5 from ",(0,t.jsx)(n.a,{href:"https://operatorframework.io/operator-capabilities/",children:"Operator Capability Levels"}),". In this example, we share a blueprint that deploy the operator as an addon along with its monitoring stack (Prometheus and grafana). Among many features, we highlighted couple of examples on creating cluster, importing data and restoring database in case of disaster (or cluster deletion). More features are available on this ",(0,t.jsx)(n.a,{href:"https://cloudnative-pg.io/documentation/1.19/",children:"documentation"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5212:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/cnpg_garfana_dashboard-3e1324abcad72e5b4b056a6b3042ccb1.png"},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var t=a(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);