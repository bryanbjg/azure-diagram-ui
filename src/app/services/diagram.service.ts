import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from '../interfaces/resource.interface';
import { Cluster } from '../interfaces/cluster.interface';
import { Relationship } from '../interfaces/relationship';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  generateDiagram(resources: Resource[], relationships: Relationship[], clusters: Cluster[]): Observable<{ message: string, image_url: string }> {
    return this.http.post<{ message: string, image_url: string }>(`${this.apiUrl}/generate-diagram`, { resources, relationships, clusters });
  }
}
