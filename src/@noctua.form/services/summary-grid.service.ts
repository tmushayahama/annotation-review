import { Injectable } from '@angular/core';
//Config
import { noctuaFormConfig } from './../noctua-form-config';
import { NoctuaFormConfigService } from './config/noctua-form-config.service';
import { NoctuaLookupService } from './lookup.service';


import * as _ from 'lodash';
declare const require: any;
const each = require('lodash/forEach');

@Injectable({
  providedIn: 'root'
})
export class SummaryGridService {
  columnDefs
  gridOptions


  constructor(private noctuaFormConfigService: NoctuaFormConfigService,
    private noctuaLookupService: NoctuaLookupService) {

    this.columnDefs = [{
      name: 'gp',
      displayName: 'Annotated Entity',
      width: 200,
      minWidth: 100,
      maxWidth: 400,
      field: 'gp',
      //headerCellTemplate: './grid-templates/header-cell-template.html',
      cellTemplate: './grid-templates/summary/gp-cell-template.html',
      enableCellSelection: false,
      enableCellEditOnFocus: false,
      enableSorting: false,
      allowCellFocus: false,
      enableHiding: true,
      enableColumnMenu: false
    }, {
      name: 'relationship',
      displayName: 'Relationship (to MF)',
      width: 80,
      minWidth: 80,
      maxWidth: 120,
      field: 'relationship',
      //headerCellTemplate: './grid-templates/header-cell-template.html',
      enableCellSelection: false,
      enableCellEditOnFocus: false,
      enableSorting: false,
      allowCellFocus: false,
      enableHiding: true,
      enableColumnMenu: false
    }, {
      name: 'aspect',
      displayName: 'Asp.',
      width: 35,
      minWidth: 35,
      maxWidth: 35,
      field: 'aspect',
      //headerCellTemplate: './grid-templates/header-cell-template.html',
      enableCellEdit: false,
      enableCellSelection: false,
      enableCellEditOnFocus: false,
      enableSorting: false,
      allowCellFocus: false,
      enableHiding: true,
      enableColumnMenu: false
    }, {
      name: 'term',
      displayName: 'Term',
      width: '15%',
      minWidth: 100,
      maxWidth: 400,
      field: 'term',
      //headerCellTemplate: './grid-templates/header-cell-template.html',
      //cellTemplate: './grid-templates/summary/term-validator-cell-template.html',
      enableCellEdit: false,
      enableCellSelection: false,
      enableCellEditOnFocus: false,
      enableSorting: false,
      allowCellFocus: false,
      enableHiding: true,
      enableColumnMenu: false
    }, {
      name: 'extRelationship',
      displayName: 'Relationship (ext)',
      width: 80,
      minWidth: 80,
      maxWidth: 120,
      field: 'extRelationship',
      //headerCellTemplate: './grid-templates/header-cell-template.html',
      enableCellEdit: false,
      enableCellSelection: false,
      enableCellEditOnFocus: false,
      enableSorting: false,
      allowCellFocus: false,
      enableHiding: true,
      enableColumnMenu: false
    }, {
      name: 'extension',
      displayName: 'Extension',
      minWidth: 100,
      maxWidth: 400,
      field: 'extension',
      //headerCellTemplate: './grid-templates/header-cell-template.html',
      //cellTemplate: './grid-templates/summary/term-validator-cell-template.html',
      enableCellEdit: false,
      enableCellSelection: false,
      enableCellEditOnFocus: false,
      enableSorting: false,
      allowCellFocus: false,
      enableHiding: true,
      enableColumnMenu: false
    }, {
      name: 'evidence',
      field: 'evidence',
      originalName: 'evidence',
      displayName: 'Evidence',
      width: '18%',
      minWidth: 100,
      maxWidth: 400,
      //headerCellTemplate: './grid-templates/header-cell-template.html',
      // cellTemplate: './grid-templates/summary/evidence-validator-cell-template.html',
      enableCellEdit: false,
      enableCellSelection: false,
      enableCellEditOnFocus: false,
      enableSorting: false,
      allowCellFocus: false,
      enableHiding: true,
      enableColumnMenu: false
    }, {
      name: 'reference',
      displayName: 'Reference',
      width: 110,
      minWidth: 80,
      maxWidth: 120,
      field: 'reference',
      //headerCellTemplate: './grid-templates/header-cell-template.html',
      cellTemplate: './grid-templates/summary/link-cell-template.html',
      enableCellEdit: false,
      enableCellSelection: false,
      enableCellEditOnFocus: false,
      enableSorting: false,
      allowCellFocus: false,
      enableHiding: true,
      enableColumnMenu: false
    }, {
      name: 'with',
      displayName: 'With',
      width: 110,
      minWidth: 100,
      maxWidth: 180,
      field: 'with',
      //headerCellTemplate: './grid-templates/header-cell-template.html',
      // cellTemplate: './grid-templates/summary/link-cell-template.html',
      enableCellEdit: false,
      enableCellSelection: false,
      enableCellEditOnFocus: false,
      enableSorting: false,
      allowCellFocus: false,
      enableHiding: true,
      enableColumnMenu: false
    }, {
      name: 'assignedBy',
      displayName: 'Assigned By',
      width: 110,
      minWidth: 100,
      maxWidth: 200,
      field: 'assignedBy',
      //headerCellTemplate: './grid-templates/header-cell-template.html',
      cellTemplate: './grid-templates/summary/link-cell-template.html',
      enableCellEdit: false,
      enableCellSelection: false,
      enableCellEditOnFocus: false,
      enableSorting: false,
      allowCellFocus: false,
      enableHiding: true,
      enableColumnMenu: false
    }, {
      name: 'action',
      displayName: '',
      width: 100,
      minWidth: 100,
      maxWidth: 100,
      field: 'action',
      // enablePinning: true,
      // pinnedRight: true,
      resizable: false,
      //headerCellTemplate: './grid-templates/header-cell-template.html',
      cellTemplate: './grid-templates/summary/actions-cell-template.html',

      enableCellEdit: false,
      enableCellSelection: false,
      enableCellEditOnFocus: false,
      enableSorting: false,
      allowCellFocus: false,
      enableHiding: true,
      enableColumnMenu: false
    }];

    this.gridOptions = {
      // rowHeight: 50,
      width: 100,
      minWidth: 100,
      exporterMenuCsv: false,
      enableGridMenu: true,
      enableCellSelection: false,
      // rowEditWaitInterval: -1,
      //  enableCellEdit: false,
      // enableCellEditOnFocus: false,
      multiSelect: false,
      // minRowsToShow: 1,
      rowTemplate: './grid-templates/summary/row-template.html',
      showTreeExpandNoChildren: false,
      enableRowSelection: true,
      //subGridVariable will be available in subGrid scope

      // keyDownOverrides: [{keyCode: 27}]
      columnDefs: this.columnDefs,
      data: [],
    };
  }

  getGrid(annotons) {
    const self = this;
    let gridData = [];

    each(annotons, function (row, key) {
      each(row.annotonPresentation.fd, function (nodeGroup) {
        each(nodeGroup.nodes, function (node) {
          let term = node.getTerm();

          if (node.id !== 'mc' && node.id !== 'gp' && term.id) {
            self.getGridRow(row, node, gridData);
          }
        });
      });
    });
    return gridData;
  }

  getGridRow(row, node, gridData) {
    const self = this;

    let extension = node.treeLevel > 1;
    let term = node.getTerm();

    gridData.unshift({
      displayEnabledBy: self.tableCanDisplayEnabledBy(node),
      treeLevel: node.treeLevel,
      gp: self.tableDisplayGp(row, node),
      relationship: extension ? '' : self.tableDisplayExtension(node),
      relationshipExt: extension ? node.relationship.label : '',
      term: extension ? {} : term,
      extension: extension ? term : {},
      aspect: node.aspect,
      evidence: node.evidence[0].evidence.control.value,
      reference: node.evidence[0].reference.control.link,
      with: node.evidence[0].with.control.value,
      assignedBy: node.evidence[0].assignedBy.control,
      node: node,
      annoton: row.annoton
      // $$treeLevel: node.treeLevel,

    })

    for (let i = 1; i < node.evidence.length; i++) {
      gridData.unshift({
        treeLevel: node.treeLevel,
        evidence: node.evidence[i].evidence.control.value,
        reference: node.evidence[i].reference.control.link,
        with: node.evidence[i].with.control.value,
        assignedBy: node.evidence[i].assignedBy.control,
        node: node,
        annoton: row.annoton
      })
    }

  }


  //These are for the table view
  tableDisplayGp(row, node) {
    const self = this;
    let display = false;

    switch (row.annoton.annotonModelType) {
      case noctuaFormConfig.annotonModelType.options.default.name:
      case noctuaFormConfig.annotonModelType.options.bpOnly.name:
        display = node.id === 'mf';
        break;
      case noctuaFormConfig.annotonModelType.options.ccOnly.name:
        display = node.id === 'cc';
        break;
    }
    return display ? row.gp : '';
  }

  tableCanDisplayEnabledBy(node) {
    const self = this;

    return node.relationship.id === noctuaFormConfig.edge.enabledBy.id
  }

  tableDisplayExtension(node) {
    const self = this;

    if (node.id === 'mf') {
      return '';
    } else if (node.isComplement) {
      return 'NOT ' + node.relationship.label;
    } else {
      return node.relationship.label;
    }
  }
}
