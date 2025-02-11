import cut from '../dist/htmldiff.js';


describe('The specs from the ruby source project', function(){

    it('should diff text', function(){
        const diff = cut('a word is here', 'a nother word is there');
        expect(diff).equal('a<ins data-operation-index="1"> nother</ins> word is ' +
                '<del data-operation-index="3">here</del><ins data-operation-index="3">' +
                'there</ins>');
    });

    it('should insert a letter and a space', function(){
        const diff = cut('a c', 'a b c');
        expect(diff).equal('a <ins data-operation-index="1">b </ins>c');
    });

    it('should remove a letter and a space', function(){
        const diff = cut('a b c', 'a c');
        diff.should == 'a <del data-operation-index="1">b </del>c';
    });

    it('should change a letter', function(){
        const diff = cut('a b c', 'a d c');
        expect(diff).equal('a <del data-operation-index="1">b</del>' +
                '<ins data-operation-index="1">d</ins> c');
    });
});
