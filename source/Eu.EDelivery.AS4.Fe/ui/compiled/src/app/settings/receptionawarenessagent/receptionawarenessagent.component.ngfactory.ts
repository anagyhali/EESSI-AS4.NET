/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/forms';
import * as i2 from '../../../../../src/app/common/multiselect/multiselect.directive';
import * as i3 from '../../common/box/box.component.ngfactory';
import * as i4 from '../../../../../src/app/common/box/box.component';
import * as i5 from '../../common/input/input.component.ngfactory';
import * as i6 from '../../../../../src/app/common/input/input.component';
import * as i7 from '../../../../../src/app/settings/runtime.store';
import * as i8 from '../../../../../src/app/common/runtimetooltip.directive';
import * as i9 from '../../../../../src/app/common/text.directive';
import * as i10 from '../../../../../src/app/common/fixformgroupstate.directive';
import * as i11 from '../../../../../src/app/authentication/hasauth/hasauth.directive';
import * as i12 from '../../../../../src/app/settings/receptionawarenessagent/receptionawarenessagent.component';
import * as i13 from '../../../../../src/app/authentication/authentication.store';
import * as i14 from '@angular/router';
import * as i15 from '../../../../../src/app/common/selectdirective';
import * as i16 from '@angular/common';
import * as i17 from '../receiver.component.ngfactory';
import * as i18 from '../../../../../src/app/settings/receiver.component';
import * as i19 from '../step/step.component.ngfactory';
import * as i20 from '../../../../../src/app/settings/step/step.component';
import * as i21 from '../../../../../src/app/common/dialog.service';
import * as i22 from '../../../../../src/app/common/form.service';
import * as i23 from '../../../../../src/app/settings/settings.store';
import * as i24 from '../../../../../src/app/settings/settings.service';
import * as i25 from '../../../../../src/app/settings/runtime.service';
const styles_ReceptionAwarenessAgentComponent:any[] = ([] as any[]);
export const RenderType_ReceptionAwarenessAgentComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_ReceptionAwarenessAgentComponent,data:{}});
function View_ReceptionAwarenessAgentComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),4,'option',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),i0.ɵdid(1,
      147456,(null as any),0,i1.NgSelectOption,[i0.ElementRef,i0.Renderer2,[2,i1.SelectControlValueAccessor]],
      {value:[0,'value']},(null as any)),i0.ɵdid(2,147456,(null as any),0,i1.ɵq,[i0.ElementRef,
      i0.Renderer2,[8,(null as any)]],{value:[0,'value']},(null as any)),i0.ɵdid(3,
      16384,(null as any),0,i2.OptionDirective,([] as any[]),(null as any),(null as any)),
      (_l()(),i0.ɵted(4,(null as any),['','']))],(_ck,_v) => {
    const currVal_0:any = _v.context.$implicit.technicalName;
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = _v.context.$implicit.technicalName;
    _ck(_v,2,0,currVal_1);
  },(_ck,_v) => {
    const currVal_2:any = _v.context.$implicit.name;
    _ck(_v,4,0,currVal_2);
  });
}
export function View_ReceptionAwarenessAgentComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),98,'form',[['class',
      'form-horizontal'],['novalidate','']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
      (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
      [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
          (null as any)]],[[(null as any),'submit'],[(null as any),'reset']],(_v,en,
      $event) => {
    var ad:boolean = true;
    if (('submit' === en)) {
      const pd_0:any = ((<any>i0.ɵnov(_v,2).onSubmit($event)) !== false);
      ad = (pd_0 && ad);
    }
    if (('reset' === en)) {
      const pd_1:any = ((<any>i0.ɵnov(_v,2).onReset()) !== false);
      ad = (pd_1 && ad);
    }
    return ad;
  },(null as any),(null as any))),i0.ɵdid(1,16384,(null as any),0,i1.ɵbf,([] as any[]),
      (null as any),(null as any)),i0.ɵdid(2,540672,(null as any),0,i1.FormGroupDirective,
      [[8,(null as any)],[8,(null as any)]],{form:[0,'form']},(null as any)),i0.ɵprd(2048,
      (null as any),i1.ControlContainer,(null as any),[i1.FormGroupDirective]),i0.ɵdid(4,
      16384,(null as any),0,i1.NgControlStatusGroup,[i1.ControlContainer],(null as any),
      (null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(6,
      0,(null as any),(null as any),60,'as4-box',([] as any[]),(null as any),(null as any),
      (null as any),i3.View_BoxComponent_0,i3.RenderType_BoxComponent)),i0.ɵdid(7,
      114688,(null as any),0,i4.BoxComponent,[i0.ElementRef,i0.Renderer],{collapsed:[0,
          'collapsed']},(null as any)),(_l()(),i0.ɵted(-1,2,['\n        '])),(_l()(),
      i0.ɵeld(9,0,(null as any),0,1,'button',[['action',''],['class','btn btn-box-tool'],
          ['type','button']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵeld(10,0,(null as any),(null as any),0,'i',[['class',
      'fa fa-save']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,2,['\n        '])),(_l()(),i0.ɵeld(12,0,(null as any),1,53,
          'div',[['content','']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),
          i0.ɵeld(14,0,(null as any),(null as any),26,'as4-input',([] as any[]),(null as any),
              (null as any),(null as any),i5.View_InputComponent_0,i5.RenderType_InputComponent)),
      i0.ɵdid(15,114688,(null as any),0,i6.InputComponent,[i7.RuntimeStore,[2,i8.RuntimetoolTipDirective]],
          {label:[0,'label']},(null as any)),(_l()(),i0.ɵted(-1,1,['\n                '])),
      (_l()(),i0.ɵeld(17,0,(null as any),1,22,'div',[['class','input-group']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n                    '])),(_l()(),i0.ɵeld(19,0,(null as any),
          (null as any),7,'input',[['as4-no-auth',''],['class','form-control'],['formControlName',
              'name'],['type','text']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'input'],[(null as any),'blur'],
              [(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,20)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,20).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,20)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,20)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(20,16384,(null as any),0,i1.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i1.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i1.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i1.DefaultValueAccessor]),i0.ɵdid(22,671744,(null as any),0,i1.FormControlName,
          [[3,i1.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i1.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i0.ɵprd(2048,(null as any),i1.NgControl,
          (null as any),[i1.FormControlName]),i0.ɵdid(24,16384,(null as any),0,i1.NgControlStatus,
          [i1.NgControl],(null as any),(null as any)),i0.ɵdid(25,16384,(null as any),
          0,i9.TextDirective,[i0.ElementRef,i0.Renderer],(null as any),(null as any)),
      i0.ɵdid(26,278528,(null as any),0,i10.FixFormGroupStateDirective,[i1.NgControl,
          [2,i1.NG_VALUE_ACCESSOR],[2,i11.HasAuthDirective]],(null as any),(null as any)),
      (_l()(),i0.ɵted(-1,(null as any),['\n                    '])),(_l()(),i0.ɵeld(28,
          0,(null as any),(null as any),10,'div',[['class','input-group-btn']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n                        '])),(_l()(),i0.ɵeld(30,0,(null as any),
          (null as any),1,'button',[['class','btn btn-flat'],['type','button']],[[2,
              'btn-primary',(null as any)],[8,'disabled',0]],[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i12.ReceptionAwarenessAgentComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.save()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵeld(31,0,(null as any),(null as any),
          0,'i',[['class','fa fa-save']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                        '])),
      (_l()(),i0.ɵeld(33,0,(null as any),(null as any),1,'button',[['class','btn btn-flat'],
          ['type','button']],[[2,'btn-primary',(null as any)],[8,'disabled',0]],[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i12.ReceptionAwarenessAgentComponent = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.reset()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵeld(34,0,(null as any),(null as any),
          0,'i',[['class','fa fa-undo']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                        '])),
      (_l()(),i0.ɵeld(36,0,(null as any),(null as any),1,'button',[['class','btn btn-flat'],
          ['type','button']],[[8,'disabled',0]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i12.ReceptionAwarenessAgentComponent = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.delete()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵeld(37,0,(null as any),(null as any),
          0,'i',[['class','fa fa-trash-o']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵted(-1,
          1,['\n            '])),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵeld(42,0,(null as any),(null as any),22,'div',[['formGroupName',
          'transformer']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],
          [2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
              (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          (null as any),(null as any),(null as any),(null as any))),i0.ɵdid(43,212992,
          (null as any),0,i1.FormGroupName,[[3,i1.ControlContainer],[8,(null as any)],
              [8,(null as any)]],{name:[0,'name']},(null as any)),i0.ɵprd(2048,(null as any),
          i1.ControlContainer,(null as any),[i1.FormGroupName]),i0.ɵdid(45,16384,(null as any),
          0,i1.NgControlStatusGroup,[i1.ControlContainer],(null as any),(null as any)),
      (_l()(),i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵeld(47,
          0,(null as any),(null as any),16,'as4-input',([] as any[]),(null as any),
          (null as any),(null as any),i5.View_InputComponent_0,i5.RenderType_InputComponent)),
      i0.ɵdid(48,114688,(null as any),0,i6.InputComponent,[i7.RuntimeStore,[2,i8.RuntimetoolTipDirective]],
          {label:[0,'label']},(null as any)),(_l()(),i0.ɵted(-1,1,['\n                    '])),
      (_l()(),i0.ɵeld(50,0,(null as any),1,12,'select',[['class','form-control'],['formControlName',
          'type']],[[2,'ng-untouched',(null as any)],[2,'ng-touched',(null as any)],
          [2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],[2,'ng-valid',
              (null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',(null as any)]],
          [[(null as any),'change'],[(null as any),'blur']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('change' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,51).onChange($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,51).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(51,16384,(null as any),0,i1.SelectControlValueAccessor,
          [i0.Renderer2,i0.ElementRef],(null as any),(null as any)),i0.ɵprd(1024,(null as any),
          i1.NG_VALUE_ACCESSOR,(p0_0:any) => {
            return [p0_0];
          },[i1.SelectControlValueAccessor]),i0.ɵdid(53,671744,(null as any),0,i1.FormControlName,
          [[3,i1.ControlContainer],[8,(null as any)],[8,(null as any)],[2,i1.NG_VALUE_ACCESSOR]],
          {name:[0,'name']},(null as any)),i0.ɵprd(2048,(null as any),i1.NgControl,
          (null as any),[i1.FormControlName]),i0.ɵdid(55,16384,(null as any),0,i1.NgControlStatus,
          [i1.NgControl],(null as any),(null as any)),i0.ɵdid(56,409600,(null as any),
          0,i11.HasAuthDirective,[i0.ElementRef,i13.AuthenticationStore,i0.Renderer,
              i14.ActivatedRoute,[2,i1.NgControl],i0.NgZone,i0.ApplicationRef],{formControlName:[0,
              'formControlName']},(null as any)),i0.ɵdid(57,16384,(null as any),0,
          i15.SelectDirective,[i0.ElementRef,i0.Renderer],(null as any),(null as any)),
      i0.ɵdid(58,278528,(null as any),0,i10.FixFormGroupStateDirective,[i1.NgControl,
          [2,i1.NG_VALUE_ACCESSOR],[2,i11.HasAuthDirective]],(null as any),(null as any)),
      (_l()(),i0.ɵted(-1,(null as any),['\n                        '])),(_l()(),i0.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_ReceptionAwarenessAgentComponent_1)),
      i0.ɵdid(61,802816,(null as any),0,i16.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,
          i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i0.ɵted(-1,
          (null as any),['\n                    '])),(_l()(),i0.ɵted(-1,1,['\n                '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵted(-1,2,['\n    '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n\n    '])),(_l()(),i0.ɵeld(68,0,(null as any),(null as any),8,'as4-box',
          ([] as any[]),(null as any),(null as any),(null as any),i3.View_BoxComponent_0,
          i3.RenderType_BoxComponent)),i0.ɵdid(69,114688,(null as any),0,i4.BoxComponent,
          [i0.ElementRef,i0.Renderer],{title:[0,'title'],collapsed:[1,'collapsed']},
          (null as any)),(_l()(),i0.ɵted(-1,2,['\n        '])),(_l()(),i0.ɵeld(71,
          0,(null as any),1,4,'div',[['content','']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵeld(73,0,(null as any),(null as any),1,'as4-receiver',([] as any[]),
          (null as any),(null as any),(null as any),i17.View_ReceiverComponent_0,i17.RenderType_ReceiverComponent)),
      i0.ɵdid(74,49152,(null as any),0,i18.ReceiverComponent,[i1.FormBuilder],{group:[0,
          'group']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i0.ɵted(-1,2,['\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n\n    '])),
      (_l()(),i0.ɵeld(78,0,(null as any),(null as any),19,'as4-box',[['collapsible',
          'true'],['title','Step configuration']],(null as any),(null as any),(null as any),
          i3.View_BoxComponent_0,i3.RenderType_BoxComponent)),i0.ɵdid(79,114688,(null as any),
          0,i4.BoxComponent,[i0.ElementRef,i0.Renderer],{title:[0,'title'],collapsed:[1,
              'collapsed'],collapsible:[2,'collapsible']},(null as any)),(_l()(),i0.ɵted(-1,
          2,['\n        '])),(_l()(),i0.ɵeld(81,0,(null as any),1,15,'div',[['content',
          '']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(83,0,(null as any),
          (null as any),5,'as4-input',[['label','Normal pipeline']],(null as any),
          (null as any),(null as any),i5.View_InputComponent_0,i5.RenderType_InputComponent)),
      i0.ɵdid(84,114688,(null as any),0,i6.InputComponent,[i7.RuntimeStore,[2,i8.RuntimetoolTipDirective]],
          {label:[0,'label']},(null as any)),(_l()(),i0.ɵted(-1,1,['\n                '])),
      (_l()(),i0.ɵeld(86,0,(null as any),1,1,'as4-step-settings',([] as any[]),(null as any),
          (null as any),(null as any),i19.View_StepSettingsComponent_0,i19.RenderType_StepSettingsComponent)),
      i0.ɵdid(87,49152,(null as any),0,i20.StepSettingsComponent,[i1.FormBuilder,i21.DialogService,
          i0.ChangeDetectorRef,i0.NgZone],{group:[0,'group'],disabled:[1,'disabled']},
          (null as any)),(_l()(),i0.ɵted(-1,1,['\n            '])),(_l()(),i0.ɵted(-1,
          (null as any),['\n            '])),(_l()(),i0.ɵeld(90,0,(null as any),(null as any),
          5,'as4-input',[['label','Error pipeline']],(null as any),(null as any),(null as any),
          i5.View_InputComponent_0,i5.RenderType_InputComponent)),i0.ɵdid(91,114688,
          (null as any),0,i6.InputComponent,[i7.RuntimeStore,[2,i8.RuntimetoolTipDirective]],
          {label:[0,'label']},(null as any)),(_l()(),i0.ɵted(-1,1,['\n                '])),
      (_l()(),i0.ɵeld(93,0,(null as any),1,1,'as4-step-settings',([] as any[]),(null as any),
          (null as any),(null as any),i19.View_StepSettingsComponent_0,i19.RenderType_StepSettingsComponent)),
      i0.ɵdid(94,49152,(null as any),0,i20.StepSettingsComponent,[i1.FormBuilder,i21.DialogService,
          i0.ChangeDetectorRef,i0.NgZone],{group:[0,'group'],disabled:[1,'disabled']},
          (null as any)),(_l()(),i0.ɵted(-1,1,['\n            '])),(_l()(),i0.ɵted(-1,
          (null as any),['\n        '])),(_l()(),i0.ɵted(-1,2,['\n    '])),(_l()(),
          i0.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i12.ReceptionAwarenessAgentComponent = _v.component;
    const currVal_7:any = _co.form;
    _ck(_v,2,0,currVal_7);
    const currVal_8:any = false;
    _ck(_v,7,0,currVal_8);
    const currVal_9:any = 'Name';
    _ck(_v,15,0,currVal_9);
    const currVal_17:any = 'name';
    _ck(_v,22,0,currVal_17);
    _ck(_v,26,0);
    const currVal_30:any = 'transformer';
    _ck(_v,43,0,currVal_30);
    const currVal_31:any = 'Transformer';
    _ck(_v,48,0,currVal_31);
    const currVal_39:any = 'type';
    _ck(_v,53,0,currVal_39);
    const currVal_40:any = 'type';
    _ck(_v,56,0,currVal_40);
    _ck(_v,58,0);
    const currVal_41:any = _co.transformers;
    _ck(_v,61,0,currVal_41);
    const currVal_42:any = 'Receiver';
    const currVal_43:any = false;
    _ck(_v,69,0,currVal_42,currVal_43);
    const currVal_44:any = _co.form.get('receiver');
    _ck(_v,74,0,currVal_44);
    const currVal_45:any = 'Step configuration';
    const currVal_46:boolean = (!!!_co.currentAgent || (_co.currentAgent && !!_co.currentAgent.stepConfiguration));
    const currVal_47:any = 'true';
    _ck(_v,79,0,currVal_45,currVal_46,currVal_47);
    const currVal_48:any = 'Normal pipeline';
    _ck(_v,84,0,currVal_48);
    const currVal_49:any = _co.form.get('stepConfiguration.normalPipeline');
    var tmp_50_0:any = (null as any);
    const currVal_50:any = (((tmp_50_0 = _co.form.get('stepConfiguration')) == null)? (null as any): tmp_50_0.disabled);
    _ck(_v,87,0,currVal_49,currVal_50);
    const currVal_51:any = 'Error pipeline';
    _ck(_v,91,0,currVal_51);
    const currVal_52:any = _co.form.get('stepConfiguration.errorPipeline');
    var tmp_53_0:any = (null as any);
    const currVal_53:any = (((tmp_53_0 = _co.form.get('stepConfiguration')) == null)? (null as any): tmp_53_0.disabled);
    _ck(_v,94,0,currVal_52,currVal_53);
  },(_ck,_v) => {
    var _co:i12.ReceptionAwarenessAgentComponent = _v.component;
    const currVal_0:any = i0.ɵnov(_v,4).ngClassUntouched;
    const currVal_1:any = i0.ɵnov(_v,4).ngClassTouched;
    const currVal_2:any = i0.ɵnov(_v,4).ngClassPristine;
    const currVal_3:any = i0.ɵnov(_v,4).ngClassDirty;
    const currVal_4:any = i0.ɵnov(_v,4).ngClassValid;
    const currVal_5:any = i0.ɵnov(_v,4).ngClassInvalid;
    const currVal_6:any = i0.ɵnov(_v,4).ngClassPending;
    _ck(_v,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_10:any = i0.ɵnov(_v,24).ngClassUntouched;
    const currVal_11:any = i0.ɵnov(_v,24).ngClassTouched;
    const currVal_12:any = i0.ɵnov(_v,24).ngClassPristine;
    const currVal_13:any = i0.ɵnov(_v,24).ngClassDirty;
    const currVal_14:any = i0.ɵnov(_v,24).ngClassValid;
    const currVal_15:any = i0.ɵnov(_v,24).ngClassInvalid;
    const currVal_16:any = i0.ɵnov(_v,24).ngClassPending;
    _ck(_v,19,0,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14,currVal_15,
        currVal_16);
    const currVal_18:any = _co.form.dirty;
    const currVal_19:boolean = !_co.form.dirty;
    _ck(_v,30,0,currVal_18,currVal_19);
    const currVal_20:any = _co.form.dirty;
    const currVal_21:boolean = !_co.form.dirty;
    _ck(_v,33,0,currVal_20,currVal_21);
    const currVal_22:any = _co.isNew;
    _ck(_v,36,0,currVal_22);
    const currVal_23:any = i0.ɵnov(_v,45).ngClassUntouched;
    const currVal_24:any = i0.ɵnov(_v,45).ngClassTouched;
    const currVal_25:any = i0.ɵnov(_v,45).ngClassPristine;
    const currVal_26:any = i0.ɵnov(_v,45).ngClassDirty;
    const currVal_27:any = i0.ɵnov(_v,45).ngClassValid;
    const currVal_28:any = i0.ɵnov(_v,45).ngClassInvalid;
    const currVal_29:any = i0.ɵnov(_v,45).ngClassPending;
    _ck(_v,42,0,currVal_23,currVal_24,currVal_25,currVal_26,currVal_27,currVal_28,
        currVal_29);
    const currVal_32:any = i0.ɵnov(_v,55).ngClassUntouched;
    const currVal_33:any = i0.ɵnov(_v,55).ngClassTouched;
    const currVal_34:any = i0.ɵnov(_v,55).ngClassPristine;
    const currVal_35:any = i0.ɵnov(_v,55).ngClassDirty;
    const currVal_36:any = i0.ɵnov(_v,55).ngClassValid;
    const currVal_37:any = i0.ɵnov(_v,55).ngClassInvalid;
    const currVal_38:any = i0.ɵnov(_v,55).ngClassPending;
    _ck(_v,50,0,currVal_32,currVal_33,currVal_34,currVal_35,currVal_36,currVal_37,
        currVal_38);
  });
}
export function View_ReceptionAwarenessAgentComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'as4-receptionawareness-agent',
      ([] as any[]),(null as any),(null as any),(null as any),View_ReceptionAwarenessAgentComponent_0,
      RenderType_ReceptionAwarenessAgentComponent)),i0.ɵdid(1,180224,(null as any),
      0,i12.ReceptionAwarenessAgentComponent,[i22.FormBuilderExtended,i23.SettingsStore,
          i24.SettingsService,i25.RuntimeService,i7.RuntimeStore,i21.DialogService],
      (null as any),(null as any))],(null as any),(null as any));
}
export const ReceptionAwarenessAgentComponentNgFactory:i0.ComponentFactory<i12.ReceptionAwarenessAgentComponent> = i0.ɵccf('as4-receptionawareness-agent',
    i12.ReceptionAwarenessAgentComponent,View_ReceptionAwarenessAgentComponent_Host_0,
    {},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovRGV2L2NvZGl0LnZpc3VhbHN0dWRpby5jb20vQVM0Lk5FVC9zb3VyY2UvRmUvRXUuRURlbGl2ZXJ5LkFTNC5GZS91aS9zcmMvYXBwL3NldHRpbmdzL3JlY2VwdGlvbmF3YXJlbmVzc2FnZW50L3JlY2VwdGlvbmF3YXJlbmVzc2FnZW50LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9EZXYvY29kaXQudmlzdWFsc3R1ZGlvLmNvbS9BUzQuTkVUL3NvdXJjZS9GZS9FdS5FRGVsaXZlcnkuQVM0LkZlL3VpL3NyYy9hcHAvc2V0dGluZ3MvcmVjZXB0aW9uYXdhcmVuZXNzYWdlbnQvcmVjZXB0aW9uYXdhcmVuZXNzYWdlbnQuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovRGV2L2NvZGl0LnZpc3VhbHN0dWRpby5jb20vQVM0Lk5FVC9zb3VyY2UvRmUvRXUuRURlbGl2ZXJ5LkFTNC5GZS91aS9zcmMvYXBwL3NldHRpbmdzL3JlY2VwdGlvbmF3YXJlbmVzc2FnZW50L3JlY2VwdGlvbmF3YXJlbmVzc2FnZW50LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovRGV2L2NvZGl0LnZpc3VhbHN0dWRpby5jb20vQVM0Lk5FVC9zb3VyY2UvRmUvRXUuRURlbGl2ZXJ5LkFTNC5GZS91aS9zcmMvYXBwL3NldHRpbmdzL3JlY2VwdGlvbmF3YXJlbmVzc2FnZW50L3JlY2VwdGlvbmF3YXJlbmVzc2FnZW50LmNvbXBvbmVudC50cy5SZWNlcHRpb25Bd2FyZW5lc3NBZ2VudENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XHJcbiAgICA8YXM0LWJveCBbY29sbGFwc2VkXT1cImZhbHNlXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBhY3Rpb24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1ib3gtdG9vbFwiPjxpIGNsYXNzPVwiZmEgZmEtc2F2ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxhczQtaW5wdXQgW2xhYmVsXT1cIidOYW1lJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCIgYXM0LW5vLWF1dGgvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWZsYXRcIiAoY2xpY2spPVwic2F2ZSgpXCIgW2NsYXNzLmJ0bi1wcmltYXJ5XT1cImZvcm0uZGlydHlcIiBbZGlzYWJsZWRdPVwiIWZvcm0uZGlydHlcIj48aSBjbGFzcz1cImZhIGZhLXNhdmVcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1mbGF0XCIgKGNsaWNrKT1cInJlc2V0KClcIiBbY2xhc3MuYnRuLXByaW1hcnldPVwiZm9ybS5kaXJ0eVwiIFtkaXNhYmxlZF09XCIhZm9ybS5kaXJ0eVwiPjxpIGNsYXNzPVwiZmEgZmEtdW5kb1wiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWZsYXRcIiAoY2xpY2spPVwiZGVsZXRlKClcIiBbZGlzYWJsZWRdPVwiaXNOZXdcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hczQtaW5wdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgZm9ybUdyb3VwTmFtZT1cInRyYW5zZm9ybWVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YXM0LWlucHV0IFtsYWJlbF09XCInVHJhbnNmb3JtZXInXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGZvcm1Db250cm9sTmFtZT1cInR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgdHJhbnNmb3JtZXIgb2YgdHJhbnNmb3JtZXJzXCIgW3ZhbHVlXT1cInRyYW5zZm9ybWVyLnRlY2huaWNhbE5hbWVcIj57e3RyYW5zZm9ybWVyLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9hczQtaW5wdXQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9hczQtYm94PlxyXG5cclxuICAgIDxhczQtYm94IFt0aXRsZV09XCInUmVjZWl2ZXInXCIgW2NvbGxhcHNlZF09XCJmYWxzZVwiPlxyXG4gICAgICAgIDxkaXYgY29udGVudD5cclxuICAgICAgICAgICAgPGFzNC1yZWNlaXZlciBbZ3JvdXBdPVwiZm9ybS5nZXQoJ3JlY2VpdmVyJylcIj48L2FzNC1yZWNlaXZlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvYXM0LWJveD5cclxuXHJcbiAgICA8YXM0LWJveCB0aXRsZT1cIlN0ZXAgY29uZmlndXJhdGlvblwiIGNvbGxhcHNpYmxlPVwidHJ1ZVwiIFtjb2xsYXBzZWRdPVwiISEhY3VycmVudEFnZW50IHx8IChjdXJyZW50QWdlbnQgJiYgISFjdXJyZW50QWdlbnQuc3RlcENvbmZpZ3VyYXRpb24pXCI+XHJcbiAgICAgICAgPGRpdiBjb250ZW50PlxyXG4gICAgICAgICAgICA8YXM0LWlucHV0IGxhYmVsPVwiTm9ybWFsIHBpcGVsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8YXM0LXN0ZXAtc2V0dGluZ3MgW2Rpc2FibGVkXT1cImZvcm0uZ2V0KCdzdGVwQ29uZmlndXJhdGlvbicpPy5kaXNhYmxlZFwiIFtncm91cF09XCJmb3JtLmdldCgnc3RlcENvbmZpZ3VyYXRpb24ubm9ybWFsUGlwZWxpbmUnKVwiPjwvYXM0LXN0ZXAtc2V0dGluZ3M+XHJcbiAgICAgICAgICAgIDwvYXM0LWlucHV0PlxyXG4gICAgICAgICAgICA8YXM0LWlucHV0IGxhYmVsPVwiRXJyb3IgcGlwZWxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxhczQtc3RlcC1zZXR0aW5ncyBbZGlzYWJsZWRdPVwiZm9ybS5nZXQoJ3N0ZXBDb25maWd1cmF0aW9uJyk/LmRpc2FibGVkXCIgW2dyb3VwXT1cImZvcm0uZ2V0KCdzdGVwQ29uZmlndXJhdGlvbi5lcnJvclBpcGVsaW5lJylcIj48L2FzNC1zdGVwLXNldHRpbmdzPlxyXG4gICAgICAgICAgICA8L2FzNC1pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvYXM0LWJveD5cclxuPC9mb3JtPiIsIjxhczQtcmVjZXB0aW9uYXdhcmVuZXNzLWFnZW50PjwvYXM0LXJlY2VwdGlvbmF3YXJlbmVzcy1hZ2VudD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNpQndCO01BQUEsK0VBQUE7TUFBQTtNQUFBLDBDQUFBO21CQUFBLDZEQUFBO01BQUE7TUFBcUY7SUFBcEM7SUFBakQsV0FBaUQsU0FBakQ7SUFBaUQ7SUFBakQsV0FBaUQsU0FBakQ7O0lBQXFGO0lBQUE7Ozs7b0JBakI3RztNQUFBO01BQUE7TUFBQTtVQUFBO1lBQUE7SUFBQTtJQUFBO01BQUE7TUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO0lBQUE7SUFBQTtFQUFBLHVDQUFBO01BQUEsb0NBQUE7TUFBQSw4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