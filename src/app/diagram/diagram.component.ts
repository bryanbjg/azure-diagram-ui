import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Resource } from '../interfaces/resource.interface';
import { Cluster } from '../interfaces/cluster.interface';
import { Relationship } from '../interfaces/relationship';
import { DiagramService } from '../services/diagram.service';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule]
})
export class DiagramComponent {
  public analyticsResources: Resource[] = [
    { name: 'AnalysisServices', type: 'analysis-services' },
    { name: 'DataExplorerClusters', type: 'data-explorer-clusters' },
    { name: 'DataFactories', type: 'data-factories' },
    { name: 'DataLakeAnalytics', type: 'data-lake-analytics' },
    { name: 'DataLakeStoreGen1', type: 'data-lake-store-gen1' },
    { name: 'Databricks', type: 'databricks' },
    { name: 'EventHubClusters', type: 'event-hub-clusters' },
    { name: 'EventHubs', type: 'event-hubs' },
    { name: 'Hdinsightclusters', type: 'hdinsightclusters' },
    { name: 'LogAnalyticsWorkspaces', type: 'log-analytics-workspaces' },
    { name: 'StreamAnalyticsJobs', type: 'stream-analytics-jobs' },
    { name: 'SynapseAnalytics', type: 'synapse-analytics' },
  ];

  public computeResources: Resource[] = [
    { name: 'AppServices', type: 'app-services' },
    { name: 'AutomanagedVM', type: 'automanaged-vm' },
    { name: 'AvailabilitySets', type: 'availability-sets' },
    { name: 'BatchAccounts', type: 'batch-accounts' },
    { name: 'CitrixVirtualDesktopsEssentials', type: 'citrix-virtual-desktops-essentials' },
    { name: 'CloudServicesClassic', type: 'cloud-services-classic' },
    { name: 'CloudServices', type: 'cloud-services' },
    { name: 'CloudsimpleVirtualMachines', type: 'cloudsimple-virtual-machines' },
    { name: 'ContainerInstances', type: 'container-instances' },
    { name: 'ContainerRegistries', type: 'container-registries' },
    { name: 'DiskEncryptionSets', type: 'disk-encryption-sets' },
    { name: 'DiskSnapshots', type: 'disk-snapshots' },
    { name: 'Disks', type: 'disks' },
    { name: 'FunctionApps', type: 'function-apps' },
    { name: 'ImageDefinitions', type: 'image-definitions' },
    { name: 'ImageVersions', type: 'image-versions' },
    { name: 'KubernetesServices', type: 'kubernetes-services' },
    { name: 'MeshApplications', type: 'mesh-applications' },
    { name: 'OsImages', type: 'os-images' },
    { name: 'SAPHANAOnAzure', type: 'sap-hana-on-azure' },
    { name: 'ServiceFabricClusters', type: 'service-fabric-clusters' },
    { name: 'SharedImageGalleries', type: 'shared-image-galleries' },
    { name: 'SpringCloud', type: 'spring-cloud' },
    { name: 'VMClassic', type: 'vm-classic' },
    { name: 'VMImages', type: 'vm-images' },
    { name: 'VMLinux', type: 'vm-linux' },
    { name: 'VMScaleSet', type: 'vm-scale-set' },
    { name: 'VMWindows', type: 'vm-windows' },
    { name: 'VM', type: 'vm' },
    { name: 'Workspaces', type: 'workspaces' },
  ];

  public databaseResources: Resource[] = [
    { name: 'BlobStorage', type: 'blob-storage' },
    { name: 'CacheForRedis', type: 'cache-for-redis' },
    { name: 'CosmosDb', type: 'cosmos-db' },
    { name: 'DataFactory', type: 'data-factory' },
    { name: 'DataLake', type: 'data-lake' },
    { name: 'DatabaseForMariadbServers', type: 'database-for-mariadb-servers' },
    { name: 'DatabaseForMysqlServers', type: 'database-for-mysql-servers' },
    { name: 'DatabaseForPostgresqlServers', type: 'database-for-postgresql-servers' },
    { name: 'ElasticDatabasePools', type: 'elastic-database-pools' },
    { name: 'ElasticJobAgents', type: 'elastic-job-agents' },
    { name: 'InstancePools', type: 'instance-pools' },
    { name: 'ManagedDatabases', type: 'managed-databases' },
    { name: 'SQLDatabases', type: 'sql-databases' },
    { name: 'SQLDatawarehouse', type: 'sql-datawarehouse' },
    { name: 'SQLManagedInstances', type: 'sql-managed-instances' },
    { name: 'SQLServerStretchDatabases', type: 'sql-server-stretch-databases' },
    { name: 'SQLServers', type: 'sql-servers' },
    { name: 'SQLVM', type: 'sql-vm' },
    { name: 'SQL', type: 'sql' },
    { name: 'SsisLiftAndShiftIr', type: 'ssis-lift-and-shift-ir' },
    { name: 'SynapseAnalytics', type: 'synapse-analytics' },
    { name: 'VirtualClusters', type: 'virtual-clusters' },
    { name: 'VirtualDatacenter', type: 'virtual-datacenter' },
  ];

  public devopsResources: Resource[] = [
    { name: 'ApplicationInsights', type: 'application-insights' },
    { name: 'Artifacts', type: 'artifacts' },
    { name: 'Boards', type: 'boards' },
    { name: 'Devops', type: 'devops' },
    { name: 'DevtestLabs', type: 'devtest-labs' },
    { name: 'LabServices', type: 'lab-services' },
    { name: 'Pipelines', type: 'pipelines' },
    { name: 'Repos', type: 'repos' },
    { name: 'TestPlans', type: 'test-plans' },
  ];

  public generalResources: Resource[] = [
    { name: 'Allresources', type: 'allresources' },
    { name: 'Azurehome', type: 'azurehome' },
    { name: 'Developertools', type: 'developertools' },
    { name: 'Helpsupport', type: 'helpsupport' },
    { name: 'Information', type: 'information' },
    { name: 'Managementgroups', type: 'managementgroups' },
    { name: 'Marketplace', type: 'marketplace' },
    { name: 'Quickstartcenter', type: 'quickstartcenter' },
    { name: 'Recent', type: 'recent' },
    { name: 'Reservations', type: 'reservations' },
    { name: 'Resource', type: 'resource' },
    { name: 'Resourcegroups', type: 'resourcegroups' },
    { name: 'Servicehealth', type: 'servicehealth' },
    { name: 'Shareddashboard', type: 'shareddashboard' },
    { name: 'Subscriptions', type: 'subscriptions' },
    { name: 'Support', type: 'support' },
    { name: 'Supportrequests', type: 'supportrequests' },
    { name: 'Tag', type: 'tag' },
    { name: 'Tags', type: 'tags' },
    { name: 'Templates', type: 'templates' },
    { name: 'Twousericon', type: 'twousericon' },
    { name: 'Userhealthicon', type: 'userhealthicon' },
    { name: 'Usericon', type: 'usericon' },
    { name: 'Userprivacy', type: 'userprivacy' },
    { name: 'Userresource', type: 'userresource' },
    { name: 'Whatsnew', type: 'whatsnew' },
  ];

  public identityResources: Resource[] = [
    { name: 'AccessReview', type: 'access-review' },
    { name: 'ActiveDirectoryConnectHealth', type: 'active-directory-connect-health' },
    { name: 'ActiveDirectory', type: 'active-directory' },
    { name: 'ADB2C', type: 'ad-b2c' },
    { name: 'ADDomainServices', type: 'ad-domain-services' },
    { name: 'ADIdentityProtection', type: 'ad-identity-protection' },
    { name: 'ADPrivilegedIdentityManagement', type: 'ad-privileged-identity-management' },
    { name: 'AppRegistrations', type: 'app-registrations' },
    { name: 'ConditionalAccess', type: 'conditional-access' },
    { name: 'EnterpriseApplications', type: 'enterprise-applications' },
    { name: 'Groups', type: 'groups' },
    { name: 'IdentityGovernance', type: 'identity-governance' },
    { name: 'InformationProtection', type: 'information-protection' },
    { name: 'ManagedIdentities', type: 'managed-identities' },
    { name: 'Users', type: 'users' },
  ];

  public integrationResources: Resource[] = [
    { name: 'APIForFhir', type: 'api-for-fhir' },
    { name: 'APIManagement', type: 'api-management' },
    { name: 'AppConfiguration', type: 'app-configuration' },
    { name: 'DataCatalog', type: 'data-catalog' },
    { name: 'EventGridDomains', type: 'event-grid-domains' },
    { name: 'EventGridSubscriptions', type: 'event-grid-subscriptions' },
    { name: 'EventGridTopics', type: 'event-grid-topics' },
    { name: 'IntegrationAccounts', type: 'integration-accounts' },
    { name: 'IntegrationServiceEnvironments', type: 'integration-service-environments' },
    { name: 'LogicAppsCustomConnector', type: 'logic-apps-custom-connector' },
    { name: 'LogicApps', type: 'logic-apps' },
    { name: 'PartnerTopic', type: 'partner-topic' },
    { name: 'SendgridAccounts', type: 'sendgrid-accounts' },
    { name: 'ServiceBusRelays', type: 'service-bus-relays' },
    { name: 'ServiceBus', type: 'service-bus' },
    { name: 'ServiceCatalogManagedApplicationDefinitions', type: 'service-catalog-managed-application-definitions' },
    { name: 'SoftwareAsAService', type: 'software-as-a-service' },
    { name: 'StorsimpleDeviceManagers', type: 'storsimple-device-managers' },
    { name: 'SystemTopic', type: 'system-topic' },
  ];

  public iotResources: Resource[] = [
    { name: 'DeviceProvisioningServices', type: 'device-provisioning-services' },
    { name: 'DigitalTwins', type: 'digital-twins' },
    { name: 'IotCentralApplications', type: 'iot-central-applications' },
    { name: 'IotHubSecurity', type: 'iot-hub-security' },
    { name: 'IotHub', type: 'iot-hub' },
    { name: 'Maps', type: 'maps' },
    { name: 'Sphere', type: 'sphere' },
    { name: 'TimeSeriesInsightsEnvironments', type: 'time-series-insights-environments' },
    { name: 'TimeSeriesInsightsEventsSources', type: 'time-series-insights-events-sources' },
    { name: 'Windows10IotCoreServices', type: 'windows-10-iot-core-services' },
  ];

  public migrationResources: Resource[] = [
    { name: 'DataBoxEdge', type: 'data-box-edge' },
    { name: 'DataBox', type: 'data-box' },
    { name: 'DatabaseMigrationServices', type: 'database-migration-services' },
    { name: 'MigrationProjects', type: 'migration-projects' },
    { name: 'RecoveryServicesVaults', type: 'recovery-services-vaults' },
  ];

  public mlResources: Resource[] = [
    { name: 'BatchAI', type: 'batch-ai' },
    { name: 'BotServices', type: 'bot-services' },
    { name: 'CognitiveServices', type: 'cognitive-services' },
    { name: 'GenomicsAccounts', type: 'genomics-accounts' },
    { name: 'MachineLearningServiceWorkspaces', type: 'machine-learning-service-workspaces' },
    { name: 'MachineLearningStudioWebServicePlans', type: 'machine-learning-studio-web-service-plans' },
    { name: 'MachineLearningStudioWebServices', type: 'machine-learning-studio-web-services' },
    { name: 'MachineLearningStudioWorkspaces', type: 'machine-learning-studio-workspaces' },
  ];

  public mobileResources: Resource[] = [
    { name: 'AppServiceMobile', type: 'app-service-mobile' },
    { name: 'MobileEngagement', type: 'mobile-engagement' },
    { name: 'NotificationHubs', type: 'notification-hubs' },
  ];

  public networkResources: Resource[] = [
    { name: 'ApplicationGateway', type: 'application-gateway' },
    { name: 'ApplicationSecurityGroups', type: 'application-security-groups' },
    { name: 'CDNProfiles', type: 'cdn-profiles' },
    { name: 'Connections', type: 'connections' },
    { name: 'DDOSProtectionPlans', type: 'ddos-protection-plans' },
    { name: 'DNSPrivateZones', type: 'dns-private-zones' },
    { name: 'DNSZones', type: 'dns-zones' },
    { name: 'ExpressrouteCircuits', type: 'expressroute-circuits' },
    { name: 'Firewall', type: 'firewall' },
    { name: 'FrontDoors', type: 'front-doors' },
    { name: 'LoadBalancers', type: 'load-balancers' },
    { name: 'LocalNetworkGateways', type: 'local-network-gateways' },
    { name: 'NetworkInterfaces', type: 'network-interfaces' },
    { name: 'NetworkSecurityGroupsClassic', type: 'network-security-groups-classic' },
    { name: 'NetworkWatcher', type: 'network-watcher' },
    { name: 'OnPremisesDataGateways', type: 'on-premises-data-gateways' },
    { name: 'PublicIpAddresses', type: 'public-ip-addresses' },
    { name: 'ReservedIpAddressesClassic', type: 'reserved-ip-addresses-classic' },
    { name: 'RouteFilters', type: 'route-filters' },
    { name: 'RouteTables', type: 'route-tables' },
    { name: 'ServiceEndpointPolicies', type: 'service-endpoint-policies' },
    { name: 'Subnets', type: 'subnets' },
    { name: 'TrafficManagerProfiles', type: 'traffic-manager-profiles' },
    { name: 'VirtualNetworkClassic', type: 'virtual-network-classic' },
    { name: 'VirtualNetworkGateways', type: 'virtual-network-gateways' },
    { name: 'VirtualNetworks', type: 'virtual-networks' },
    { name: 'VirtualWans', type: 'virtual-wans' },
  ];

  public securityResources: Resource[] = [
    { name: 'ApplicationSecurityGroups', type: 'application-security-groups' },
    { name: 'ConditionalAccess', type: 'conditional-access' },
    { name: 'Defender', type: 'defender' },
    { name: 'ExtendedSecurityUpdates', type: 'extended-security-updates' },
    { name: 'KeyVaults', type: 'key-vaults' },
    { name: 'SecurityCenter', type: 'security-center' },
    { name: 'Sentinel', type: 'sentinel' },
  ];

  public storageResources: Resource[] = [
    { name: 'ArchiveStorage', type: 'archive-storage' },
    { name: 'Azurefxtedgefiler', type: 'azurefxtedgefiler' },
    { name: 'BlobStorage', type: 'blob-storage' },
    { name: 'DataBoxEdgeDataBoxGateway', type: 'data-box-edge-data-box-gateway' },
    { name: 'DataBox', type: 'data-box' },
    { name: 'DataLakeStorage', type: 'data-lake-storage' },
    { name: 'GeneralStorage', type: 'general-storage' },
    { name: 'NetappFiles', type: 'netapp-files' },
    { name: 'QueuesStorage', type: 'queues-storage' },
    { name: 'StorageAccountsClassic', type: 'storage-accounts-classic' },
    { name: 'StorageAccounts', type: 'storage-accounts' },
    { name: 'StorageExplorer', type: 'storage-explorer' },
    { name: 'StorageSyncServices', type: 'storage-sync-services' },
    { name: 'StorsimpleDataManagers', type: 'storsimple-data-managers' },
    { name: 'StorsimpleDeviceManagers', type: 'storsimple-device-managers' },
    { name: 'TableStorage', type: 'table-storage' },
  ];

  public webResources: Resource[] = [
    { name: 'APIConnections', type: 'api-connections' },
    { name: 'AppServiceCertificates', type: 'app-service-certificates' },
    { name: 'AppServiceDomains', type: 'app-service-domains' },
    { name: 'AppServiceEnvironments', type: 'app-service-environments' },
    { name: 'AppServicePlans', type: 'app-service-plans' },
    { name: 'AppServices', type: 'app-services' },
    { name: 'MediaServices', type: 'media-services' },
    { name: 'NotificationHubNamespaces', type: 'notification-hub-namespaces' },
    { name: 'Search', type: 'search' },
    { name: 'Signalr', type: 'signalr' },
  ];

  public clusters: Cluster[] = [];
  public selectedResources: Resource[] = [];
  public relationships: Relationship[] = [];
  public clusterName: string = '';
  public sourceResource: string = '';
  public targetResource: string = '';
  public diagramUrl: string | null = null;
  public notificationMessage: string | null = null;
  public isLoading = false;

  constructor(private diagramService: DiagramService) {}

  selectResource(resource: Resource) {
    if (!this.selectedResources.includes(resource)) {
      this.selectedResources.push(resource);
    }
  }

  toggleResource(resource: Resource) {
    const index = this.selectedResources.indexOf(resource);
    if (index > -1) {
      this.selectedResources.splice(index, 1);
    } else {
      this.selectedResources.push(resource);
    }
  }

  removeResource(resource: Resource) {
    const index = this.selectedResources.indexOf(resource);
    if (index > -1) {
      this.selectedResources.splice(index, 1);
    }
  }

  addRelationship() {
    if (this.sourceResource && this.targetResource) {
      this.relationships.push({ source: this.sourceResource, target: this.targetResource });
      this.showNotification('Relación lista. Puede seguir añadiendo relaciones o generar su diagrama.');
    }
  }
  

  addCluster() {
    if (this.clusterName && this.selectedResources.length > 0) {
      const cluster: Cluster = { name: this.clusterName, resources: this.selectedResources };
      this.clusters.push(cluster);
      this.selectedResources = [];
      this.clusterName = '';
    }
  }
  generateDiagram() {
    if (this.clusters.length === 0 && this.selectedResources.length === 0) {
      this.showNotification('No se seleccionaron recursos ni clusters para generar el diagrama.');
      return;
    }
  
    this.isLoading = true;
  
    const resources = this.selectedResources.map(resource => ({
      name: resource.name,
      type: resource.type
    }));
  
    this.diagramService.generateDiagram(resources, this.relationships, this.clusters).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.showNotification('Diagrama generado con éxito.');
        setTimeout(() => {
          this.diagramUrl = response.image_url;
        }, 2000); // Espera 2 segundos para mostrar el diagrama
      },
      error: () => {
        this.isLoading = false;
        this.showNotification('Falla al generar diagrama, intente de nuevo.');
      }
    });
  }
  

  showNotification(message: string) {
    this.notificationMessage = message;
    setTimeout(() => {
      this.notificationMessage = null;
    }, 5000);
  }
  

  getImagePath(resourceType: string): string {
    const resourceTypeLower = resourceType.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    return `assets/images/${resourceTypeLower}.png`;
  }
}
