import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
//import { CLIENTES } from './clientes.json';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = "http://localhost:8080/api/clientes";
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{ 
    //return of(CLIENTES);
    return this.http.get<Cliente[]>(this.urlEndPoint); // Primera forma de retornar
    // return this.http.get(this.urlEndPoint).pipe(          // Segunda forma de retornar
    //   map( (response) => response as Cliente[])
    // )
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }
}
