
declare module "ngl" {
  export class Stage {
    constructor(element: HTMLElement, options?: any);
    loadFile(path: string, options?: any): Promise<Component>;
    handleResize(): void;
    autoView(duration?: number): void;
    setParameters(params: any): void;
    dispose(): void;
  }
  
  export class Component {
    addRepresentation(type: string, options?: any): void;
    removeAllRepresentations(): void;
  }
  
  export class ColormakerRegistry {
    static addSelectionScheme(): void;
  }
}
