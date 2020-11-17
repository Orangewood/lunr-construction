export interface Welcome {
    results: Results;
}

export interface Results {
    managed_clients: { [key: string]: ManagedClient };
    more:            boolean;
}

export interface ManagedClient {
    id:            string;
    company_url:   string;
    company_name:  string;
    active:        boolean;
    created:       Date;
    last_modified: Date;
}
