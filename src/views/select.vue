<template>
    <div class="">
        <h3>
            default：
        </h3>
        <p>
            <w-select style="width:200px" v-model="selectValue"
                      @change="handleChange">
                <w-select-option v-for="option in selectOptions"
                                 :key="option.value" :value="option.value"
                                 :label="option.label">
                </w-select-option>
            </w-select>
        </p>
        <h3>
            large
        </h3>
        <p>
            <w-select style="width:200px" v-model="selectValue" size="large">
                <w-select-option v-for="option in selectOptions"
                                 :key="option.value" :value="option.value"
                                 :label="option.label">
                </w-select-option>
            </w-select>
        </p>
        <h3>多选</h3>
        <p>
            <w-select style="width:200px" multiple v-model="selectValues"
                      @change="handleChange">
                <w-select-option v-for="option in selectOptions"
                                 :key="option.value" :value="option.value"
                                 :label="option.label">
                </w-select-option>
            </w-select>
        </p>
        <h3>
            plain
        </h3>
        <p>
            <w-select multiple plain placeholder="请选择" :dropdownWidth="200"
                      v-model="selectValues">
                <w-select-option v-for="option in selectOptions"
                                 :key="option.value" :value="option.value"
                                 :label="option.label">
                </w-select-option>
            </w-select>

        </p>
        <h3>plain 数据字符少</h3>
        <p>
            <w-select multiple plain placeholder="请选择" :dropdownWidth="200"
                      v-model="selectValues">
                <w-select-option v-for="option in 5" :key="option"
                                 :value="option" :label="option+''">
                </w-select-option>
            </w-select>
        </p>
        <h3>数据多，滚动条</h3>
        <p>
            <w-select multiple style="width:200px" placeholder="请选择"
                      v-model="selectValues">
                <w-select-option v-for="option in 100" :key="option"
                                 :value="option" :label="option+''">
                </w-select-option>
            </w-select>

        </p>
        <h3>数据的，plain</h3>
        <p>
            <w-select multiple plain placeholder="请" v-model="selectValues">
                <w-select-option v-for="option in 1000" :key="option"
                                 :value="option" :label="option+''">
                </w-select-option>
            </w-select>
        </p>
        <h3>select tree</h3>
        <p>
            <w-select plain placeholder="请选择" dropdownClass="tree-dropdown"
                      v-model="selectValue">
                <w-select-tree :data="treeData" expandAll nameKey="proj_name"
                               :nodeDisabledMethod="nodeDisabledMethod"
                               nodeKey="proj_guid">
                    <template slot-scope="{data}">
                        {{data.parent_guid?data.proj_short_name:data.proj_name}}
                    </template>
                </w-select-tree>
            </w-select>
        </p>
        <h3>select tree 多选</h3>
        <p>
            <w-select multiple multipleSuffix="项目" plain placeholder="请选择"
                      :dropdownWidth="300" dropdownClass="tree-dropdown"
                      v-model="selectValues">
                <w-select-tree :data="treeData" expandAll nameKey="proj_name"
                               :nodeDisabledMethod="nodeDisabledMethod"
                               nodeKey="proj_guid">
                    <template slot-scope="{data}">
                        {{data.parent_guid?data.proj_short_name:data.proj_name}}
                    </template>
                </w-select-tree>
            </w-select>
        </p>
        <p>
            <w-button @click="handleChangeOptions">改变options
            </w-button>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectValue: 'beijing',
            selectValues: [],
            selectOptions: [
                {
                    value: 'beijing',
                    label: '北京',
                },
                {
                    value: 'guangzhou',
                    label:
                        '广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州广州',
                },
                {
                    value: 'shanghai',
                    label: '上海',
                },
            ],
            treeData: [
                {
                    proj_guid: 'ab968511-cab6-4364-204b-08d85bb293c8',
                    proj_name: '武汉公司-海悦天地（重点）',
                    proj_code: 'zb.HZ.WH.100001',
                    parent_code: null,
                    proj_status: '1',
                    parent_guid: null,
                    proj_short_name: '海悦天地（重点）',
                    buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                    if_end: '0',
                    principal: null,
                    projectguid: 'ab968511-cab6-4364-204b-08d85bb293c8',
                    children: [
                        {
                            proj_guid: 'cb3ffdb6-ff73-4fd4-27ce-08d85bb293c8',
                            proj_name: '海悦天地（重点）-一期（重点）',
                            proj_code: 'zb.HZ.WH.100001.one',
                            parent_code: 'zb.HZ.WH.100001',
                            proj_status: '1',
                            parent_guid: 'ab968511-cab6-4364-204b-08d85bb293c8',
                            proj_short_name: '一期（重点）',
                            buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                            if_end: '0',
                            principal: null,
                            projectguid: 'ab968511-cab6-4364-204b-08d85bb293c8',
                            children: [
                                {
                                    proj_guid: '096110ab-65f3-40b0-32db-08d85bb293c8',
                                    proj_name: '海悦天地（重点）-一期（重点）-一组团（1#、2#、3#）',
                                    proj_code: 'zb.HZ.WH.100001.one.groupone',
                                    parent_code: 'zb.HZ.WH.100001.one',
                                    proj_status: '1',
                                    parent_guid: 'cb3ffdb6-ff73-4fd4-27ce-08d85bb293c8',
                                    proj_short_name: '一组团（1#、2#、3#）',
                                    buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                                    if_end: '1',
                                    principal: null,
                                    projectguid: 'ab968511-cab6-4364-204b-08d85bb293c8',
                                    children: [],
                                },
                            ],
                        },
                        {
                            proj_guid: 'd2875c29-3b9f-4df2-f8ad-08d85bb293c8',
                            proj_name: '海悦天地（重点）-二期',
                            proj_code: 'zb.HZ.WH.100001.two',
                            parent_code: 'zb.HZ.WH.100001',
                            proj_status: '1',
                            parent_guid: 'ab968511-cab6-4364-204b-08d85bb293c8',
                            proj_short_name: '二期',
                            buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                            if_end: '0',
                            principal: null,
                            projectguid: 'ab968511-cab6-4364-204b-08d85bb293c8',
                            children: [
                                {
                                    proj_guid: '569b9b48-81b0-4c06-faa2-08d85bb293c8',
                                    proj_name: '海悦天地（重点）-二期-1组团（1#、2#、3#）',
                                    proj_code: 'zb.HZ.WH.100001.two.1',
                                    parent_code: 'zb.HZ.WH.100001.two',
                                    proj_status: '1',
                                    parent_guid: 'd2875c29-3b9f-4df2-f8ad-08d85bb293c8',
                                    proj_short_name: '1组团（1#、2#、3#）',
                                    buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                                    if_end: '1',
                                    principal: null,
                                    projectguid: 'ab968511-cab6-4364-204b-08d85bb293c8',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    proj_guid: '488870c9-c69d-411b-1cf2-08d8855974b6',
                    proj_name: '武汉公司-当代国际城',
                    proj_code: 'zb.HZ.WH.20201111',
                    parent_code: null,
                    proj_status: '1',
                    parent_guid: null,
                    proj_short_name: '当代国际城',
                    buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                    if_end: '0',
                    principal: null,
                    projectguid: '488870c9-c69d-411b-1cf2-08d8855974b6',
                    children: [
                        {
                            proj_guid: '9a46316f-698a-4a00-1d88-08d8855974b6',
                            proj_name: '当代国际城-一期',
                            proj_code: 'zb.HZ.WH.20201111.01',
                            parent_code: 'zb.HZ.WH.20201111',
                            proj_status: '1',
                            parent_guid: '488870c9-c69d-411b-1cf2-08d8855974b6',
                            proj_short_name: '一期',
                            buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                            if_end: '1',
                            principal: null,
                            projectguid: '488870c9-c69d-411b-1cf2-08d8855974b6',
                            children: [],
                        },
                        {
                            proj_guid: '0ee01593-84cd-44ca-1e35-08d8855974b6',
                            proj_name: '当代国际城-二期',
                            proj_code: 'zb.HZ.WH.20201111.02',
                            parent_code: 'zb.HZ.WH.20201111',
                            proj_status: '1',
                            parent_guid: '488870c9-c69d-411b-1cf2-08d8855974b6',
                            proj_short_name: '二期',
                            buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                            if_end: '1',
                            principal: null,
                            projectguid: '488870c9-c69d-411b-1cf2-08d8855974b6',
                            children: [],
                        },
                    ],
                },
                {
                    proj_guid: '2e5625ab-f555-47bd-9fff-08d876fe3933',
                    proj_name: '武汉公司-保利时代',
                    proj_code: 'zb.HZ.WH.30001',
                    parent_code: null,
                    proj_status: '1',
                    parent_guid: null,
                    proj_short_name: '保利时代',
                    buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                    if_end: '0',
                    principal: null,
                    projectguid: '2e5625ab-f555-47bd-9fff-08d876fe3933',
                    children: [
                        {
                            proj_guid: '132cbf6f-9e73-4b84-a068-08d876fe3933',
                            proj_name: '保利时代-一期',
                            proj_code: 'zb.HZ.WH.30001.one',
                            parent_code: 'zb.HZ.WH.30001',
                            proj_status: '1',
                            parent_guid: '2e5625ab-f555-47bd-9fff-08d876fe3933',
                            proj_short_name: '一期',
                            buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                            if_end: '0',
                            principal: null,
                            projectguid: '2e5625ab-f555-47bd-9fff-08d876fe3933',
                            children: [
                                {
                                    proj_guid: '54c36789-52aa-4749-d72a-08d876fe3933',
                                    proj_name: '保利时代-一期-一组团',
                                    proj_code: 'zb.HZ.WH.30001.one.0001',
                                    parent_code: 'zb.HZ.WH.30001.one',
                                    proj_status: '1',
                                    parent_guid: '132cbf6f-9e73-4b84-a068-08d876fe3933',
                                    proj_short_name: '一组团',
                                    buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                                    if_end: '1',
                                    principal: null,
                                    projectguid: '2e5625ab-f555-47bd-9fff-08d876fe3933',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    proj_guid: '321a72d5-7fca-4618-d4bf-08d8ab04f37a',
                    proj_name: '武汉公司-FJQ项目',
                    proj_code: 'zb.HZ.WH.FJQ',
                    parent_code: null,
                    proj_status: '1',
                    parent_guid: null,
                    proj_short_name: 'FJQ项目',
                    buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                    if_end: '0',
                    principal: null,
                    projectguid: '321a72d5-7fca-4618-d4bf-08d8ab04f37a',
                    children: [
                        {
                            proj_guid: '5c6fc0b5-260c-49b8-d8e1-08d8ab04f37a',
                            proj_name: 'FJQ项目-开发一期',
                            proj_code: 'zb.HZ.WH.FJQ.001',
                            parent_code: 'zb.HZ.WH.FJQ',
                            proj_status: '1',
                            parent_guid: '321a72d5-7fca-4618-d4bf-08d8ab04f37a',
                            proj_short_name: '开发一期',
                            buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                            if_end: '1',
                            principal: null,
                            projectguid: '321a72d5-7fca-4618-d4bf-08d8ab04f37a',
                            children: [],
                        },
                        {
                            proj_guid: '371e55c6-a6c6-40c9-d993-08d8ab04f37a',
                            proj_name: 'FJQ项目-开发二期',
                            proj_code: 'zb.HZ.WH.FJQ.002',
                            parent_code: 'zb.HZ.WH.FJQ',
                            proj_status: '1',
                            parent_guid: '321a72d5-7fca-4618-d4bf-08d8ab04f37a',
                            proj_short_name: '开发二期',
                            buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                            if_end: '1',
                            principal: null,
                            projectguid: '321a72d5-7fca-4618-d4bf-08d8ab04f37a',
                            children: [],
                        },
                    ],
                },
                {
                    proj_guid: 'c08dda15-a48e-4994-b315-08d85aaed5de',
                    proj_name: '武汉公司-测试项目测试项目',
                    proj_code: 'zb.HZ.WH.cs',
                    parent_code: null,
                    proj_status: '1',
                    parent_guid: null,
                    proj_short_name: '测试项目测试项目',
                    buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                    if_end: '0',
                    principal: null,
                    projectguid: 'c08dda15-a48e-4994-b315-08d85aaed5de',
                    children: [
                        {
                            proj_guid: 'e1f1286c-5248-4d4d-b363-08d85aaed5de',
                            proj_name: '测试项目测试项目-一期',
                            proj_code: 'zb.HZ.WH.cs.yq',
                            parent_code: 'zb.HZ.WH.cs',
                            proj_status: '1',
                            parent_guid: 'c08dda15-a48e-4994-b315-08d85aaed5de',
                            proj_short_name: '一期',
                            buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                            if_end: '0',
                            principal: null,
                            projectguid: 'c08dda15-a48e-4994-b315-08d85aaed5de',
                            children: [
                                {
                                    proj_guid: 'd23e4430-2a05-4a2b-cd5a-08d85aaed5de',
                                    proj_name: '测试项目测试项目-一期-9月组团',
                                    proj_code: 'zb.HZ.WH.cs.yq.0001',
                                    parent_code: 'zb.HZ.WH.cs.yq',
                                    proj_status: '1',
                                    parent_guid: 'e1f1286c-5248-4d4d-b363-08d85aaed5de',
                                    proj_short_name: '9月组团',
                                    buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                                    if_end: '1',
                                    principal: null,
                                    projectguid: 'c08dda15-a48e-4994-b315-08d85aaed5de',
                                    children: [],
                                },
                                {
                                    proj_guid: '1fbea168-97f6-490b-d311-08d85aaed5de',
                                    proj_name: '测试项目测试项目-一期-10月组团',
                                    proj_code: 'zb.HZ.WH.cs.yq.0002',
                                    parent_code: 'zb.HZ.WH.cs.yq',
                                    proj_status: '1',
                                    parent_guid: 'e1f1286c-5248-4d4d-b363-08d85aaed5de',
                                    proj_short_name: '10月组团',
                                    buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                                    if_end: '1',
                                    principal: null,
                                    projectguid: 'c08dda15-a48e-4994-b315-08d85aaed5de',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    proj_guid: '5bf7fa1b-22cc-439b-b1d9-08d85aaed5de',
                    proj_name: '武汉公司-阳光100',
                    proj_code: 'zb.HZ.WH.yg100',
                    parent_code: null,
                    proj_status: '1',
                    parent_guid: null,
                    proj_short_name: '阳光100',
                    buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                    if_end: '0',
                    principal: '249c59fe-3f69-4415-7a51-08d85aaed5de',
                    projectguid: '5bf7fa1b-22cc-439b-b1d9-08d85aaed5de',
                    children: [
                        {
                            proj_guid: '0f3b9c88-57fb-4b7c-b2a2-08d85aaed5de',
                            proj_name: '阳光100-二期',
                            proj_code: 'zb.HZ.WH.yg100.eq',
                            parent_code: 'zb.HZ.WH.yg100',
                            proj_status: '1',
                            parent_guid: '5bf7fa1b-22cc-439b-b1d9-08d85aaed5de',
                            proj_short_name: '二期',
                            buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                            if_end: '1',
                            principal: '249c59fe-3f69-4415-7a51-08d85aaed5de',
                            projectguid: '5bf7fa1b-22cc-439b-b1d9-08d85aaed5de',
                            children: [],
                        },
                        {
                            proj_guid: 'f4397834-d87d-4b1e-b3da-08d85aaed5de',
                            proj_name: '阳光100-三期',
                            proj_code: 'zb.HZ.WH.yg100.sq',
                            parent_code: 'zb.HZ.WH.yg100',
                            proj_status: '1',
                            parent_guid: '5bf7fa1b-22cc-439b-b1d9-08d85aaed5de',
                            proj_short_name: '三期',
                            buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                            if_end: '1',
                            principal: '249c59fe-3f69-4415-7a51-08d85aaed5de',
                            projectguid: '5bf7fa1b-22cc-439b-b1d9-08d85aaed5de',
                            children: [],
                        },
                        {
                            proj_guid: '7c679f7d-2264-4ad3-b228-08d85aaed5de',
                            proj_name: '阳光100-一期洋房',
                            proj_code: 'zb.HZ.WH.yg100.yq',
                            parent_code: 'zb.HZ.WH.yg100',
                            proj_status: '1',
                            parent_guid: '5bf7fa1b-22cc-439b-b1d9-08d85aaed5de',
                            proj_short_name: '一期洋房',
                            buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                            if_end: '0',
                            principal: '249c59fe-3f69-4415-7a51-08d85aaed5de',
                            projectguid: '5bf7fa1b-22cc-439b-b1d9-08d85aaed5de',
                            children: [
                                {
                                    proj_guid: '6a61ebc5-6935-4740-d8c8-08d85aaed5de',
                                    proj_name: '阳光100-一期洋房-二区组团',
                                    proj_code: 'zb.HZ.WH.yg100.yq.0001',
                                    parent_code: 'zb.HZ.WH.yg100.yq',
                                    proj_status: '1',
                                    parent_guid: '7c679f7d-2264-4ad3-b228-08d85aaed5de',
                                    proj_short_name: '二区组团',
                                    buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                                    if_end: '1',
                                    principal: '249c59fe-3f69-4415-7a51-08d85aaed5de',
                                    projectguid: '5bf7fa1b-22cc-439b-b1d9-08d85aaed5de',
                                    children: [],
                                },
                                {
                                    proj_guid: '22becb99-05ff-4b75-de7f-08d85aaed5de',
                                    proj_name: '阳光100-一期洋房-一区组团',
                                    proj_code: 'zb.HZ.WH.yg100.yq.0002',
                                    parent_code: 'zb.HZ.WH.yg100.yq',
                                    proj_status: '1',
                                    parent_guid: '7c679f7d-2264-4ad3-b228-08d85aaed5de',
                                    proj_short_name: '一区组团',
                                    buguid: '0261c639-2e11-4224-a59e-08d85928fbfe',
                                    if_end: '1',
                                    principal: '249c59fe-3f69-4415-7a51-08d85aaed5de',
                                    projectguid: '5bf7fa1b-22cc-439b-b1d9-08d85aaed5de',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
                {
                    proj_guid: 'e19e46b0-5b27-4311-b44d-08d85aaed5de',
                    proj_name: '深圳公司-招商华府',
                    proj_code: 'zb.hn.szgs.zshf',
                    parent_code: null,
                    proj_status: '1',
                    parent_guid: null,
                    proj_short_name: '招商华府',
                    buguid: '1c97bd89-dd58-4f6b-745c-08d85aaed5de',
                    if_end: '0',
                    principal: null,
                    projectguid: 'e19e46b0-5b27-4311-b44d-08d85aaed5de',
                    children: [
                        {
                            proj_guid: '5165d3a6-7b22-4948-b499-08d85aaed5de',
                            proj_name: '招商华府-一期',
                            proj_code: 'zb.hn.szgs.zshf.yq',
                            parent_code: 'zb.hn.szgs.zshf',
                            proj_status: '1',
                            parent_guid: 'e19e46b0-5b27-4311-b44d-08d85aaed5de',
                            proj_short_name: '一期',
                            buguid: '1c97bd89-dd58-4f6b-745c-08d85aaed5de',
                            if_end: '1',
                            principal: null,
                            projectguid: 'e19e46b0-5b27-4311-b44d-08d85aaed5de',
                            children: [],
                        },
                    ],
                },
            ],
        }
    },
    methods: {
        nodeDisabledMethod(node) {
            return node.if_end !== '1'
        },
        handleChangeOptions() {
            this.selectOptions = [
                {
                    value: 'wuhan',
                    label: '武汉',
                },
                {
                    value: 'nanjing',
                    label: '南京',
                },
                {
                    value: 'shenzhen',
                    label: '深圳',
                },
            ]
        },
        handleChange() {},
    },
}
</script>

<style lang="less">
.w-select-dropdown.tree-dropdown {
    max-height: 300px;
}
</style>
