import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { menuNode } from './core/models/models';
import { ApiService } from './core/service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nodetask';
  treeControl = new NestedTreeControl<menuNode>(node => (node.children));
  dataSource = new MatTreeNestedDataSource<menuNode>()
  menuMasters: any = []
  constructor(private api: ApiService) {
  }
  ngOnInit(): void {
    this.getMenuMaster()
  }
  hasChild = (_: number, node: menuNode) => !!node.children && node.children.length > 0;
  getMenuMaster() {
    this.api.getMenuMasters().subscribe({
      next: (res) => {
        this.dataSource.data = res.data.map(ele => {
          return {
            name: ele.name,
            status: true,
            children: [{
              name: ele.name,
              status: true,
              children: []
            }]
          } as menuNode
        })
        console.log(res);

      }
    })
  }
}
